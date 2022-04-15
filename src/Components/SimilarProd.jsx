import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardItem from './CardSm'

const Container = styled.div`
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    justify-content: start;
    color: #393939;
`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    margin: 22px 0;
`
const Wrapper = styled.div `
    margin: 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SimilarProd = ({dataItem}) => {    
    const [data, setData] = useState([]);
    const params = useParams()

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])

    console.log('g', dataItem.collectionId)

    const filtered =  data?.filter((item) => dataItem.collectionId === item.collectionId )

    return (
        <Wrapper>
            <Collection>Похожие товары</Collection>
            <Container> 
                {(filtered) ? filtered.slice(0, 5).map(item=>(
                    <CardItem item={item} key={item.id}/> 
                )) : <div>...</div>}
        </Container>
        </Wrapper>
    );
};

export default SimilarProd;