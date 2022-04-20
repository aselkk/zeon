import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import {MdArrowForwardIos} from 'react-icons/md'

const CollectionComponents = () => {    
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(4)
    const [showMore, setShowMore] = useState(false)

        const getCollections = async () => {
            const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/storage`)
            const jsonData = await fetchData.json()
            setData(jsonData)
            console.log(data)
        }
    
    useEffect(() => {
        getCollections()
    }, [showMore])
    
    const handleClick = () => {
        setShowMore(true)
    }


    return (
        <Wrapper>
            <Collection>Коллекции</Collection>
            <Container> 
            {data?.slice(0, showMore ? 4 : 8).map((item, index)=>(
                    <div>
                        <Card  key={index}>
                            <Image src={item.image} alt="" />
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Title>{item.collection}</Title>
                            <NavLink style={{width:'100%', textDecoration:'none'}} to={'/collection/' + item.id}>
                                <More>Cмотреть все <MdArrowForwardIos style={{height:' 24px', width: '30px'}}/></More>
                            </NavLink>
                        </div>
                    </Card>
                    </div>
                ))}
        </Container>
            <button style={{color: 'white', background: 'black', border: 'none', padding: '8px 38px', marginTop: '16px', cursor: 'pointer'}}
            onClick={handleClick}>Еще</button>
        </Wrapper>
    );
};
export default CollectionComponents;

const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
    @media screen and (max-width: 390px) 
    { 
        padding: 22px 0;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8px 8px 0;
    transition: .3s;
    position:relative;
    &:hover {
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        box-shadow: 0 0 14px rgba(33,33,33,.4); 

    }   
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
    text-shadow: 3px 5px 2px #474747, -40px 40px 20px rgba(206,89,55,0);
        width: 100%;
    text-align: center;
    text-shadow: 1px 1px 17px rgba(0, 0, 0, 1);

    `
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;

`
const More = styled.button`
    color: white;
    padding: 8px 0;
    background: black;
    border: none;
    width: 100%;
    cursor: pointer;
    &:hover {
        background:white;
        color:black;
    };
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div `
    margin: 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
