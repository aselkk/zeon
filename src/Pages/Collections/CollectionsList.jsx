import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import {MdArrowForwardIos} from 'react-icons/md'
import Pagination from '../../Components/Pagination'


const CollectionsList = () => {    
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    const limitPerPage = 4
    const pageVisited = pageNumber * limitPerPage

    const getCollections = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/storage')
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    const displayData = data
    .slice(pageVisited, pageVisited + limitPerPage)
    .map((item) => <Card key={item.id}>
                        <Image src={item.image} alt="" />
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Title>{item.collection}</Title>
                            <NavLink style={{width:'100%', textDecoration:'none'}} to={'/collection/' + item.id}>
                                <More>Смотреть все  <MdArrowForwardIos style={{height:' 24px', width: '30px'}}/></More>
                            </NavLink>
                        </div>   
                    </Card>)

    const pageCount = Math.ceil(data.length/limitPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    console.log(data)   
    
    useEffect(() => {
        getCollections()
    }, [])
    
    return (
        <Wrapper>
            <Collection>Коллекции</Collection>
            <Container> 
                {displayData}
            </Container>
            <Pagination pageCount={pageCount} changePage={changePage}/>
        </Wrapper>
    );
};
export default CollectionsList;


const Container = styled.div`
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
    text-shadow: 1px 1px 17px rgba(0, 0, 0, 1);

`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 18px;
    margin-left: 30px;
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
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div `
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background:#ECECEC;
    padding:44px 0px;
    padding: 22px 99px;
    text-align: left

`