import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8px 8px 0;
    position:relative;
`
const Image = styled.img`
    width: 286px;

`
const Title = styled.p`
    font-weight: 500;
    font-size: 15px;
    color: white;
    position:absolute;
    bottom: 56px;
`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
`
const More = styled.button`
    color: white;
    padding: 12px 0;
    background: black;
    border: none;
    width: 100%;
    cursor: pointer;
    &:hover {
        background:white;
        color:black;
    }
`
const Wrapper = styled.div `
    margin: 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const showMore = styled.button`
color: white;
background: black;
border: none;
padding: 8px 38px;
margin-top: 16px;
cursor: pointer;
`

const CollectionComponents = () => {    
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(4)

        const getCollections = async () => {
            const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/storage?page=1&limit=${limit}`)
            const jsonData = await fetchData.json()
            setData(jsonData)
        }
    
    useEffect(() => {
        getCollections()
    }, [limit])
    
    

    return (
        <Wrapper>
            <Collection>Коллекции</Collection>
            <Container> 
                {(data) ? data.map(item=>(
                    <Card  key={item.id}>
                        <Image src={item.image} alt="" />
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Title>{item.collection}</Title>
                            <NavLink style={{width:'100%'}} to={'/collection/' + item.id}>
                                <More>Смотреть все</More>
                            </NavLink>
                        </div>   
                    </Card>
                )) : <div>Данные грузятся...</div>}
        </Container>
            <button style={{color: 'white', background: 'black', border: 'none', padding: '8px 38px', marginTop: '16px', cursor: 'pointer'}}
            onClick={()=>setLimit(limit+4)} >Еще</button>
        </Wrapper>
    );
};
export default CollectionComponents;