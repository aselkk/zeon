import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardItemSm from './CardSm'

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
    align-items: start;
    flex-direction: column;
`
const Triangle = styled.div`
    position: absolute;
    display: inline-block;
    z-index: 10;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 0;
    border-color: #E5271B transparent transparent transparent;
`
const Sale = styled.p`
    z-index: 99;
    position: absolute;
    padding-top: 9px;
    offset-rotate: 19px;
    font-size: 12px;
    color: white;
    transform: rotate(318deg);
    font-weight: 500;
}
`
const Suggestion = ({dataItem}) => {    
    const [data, setData] = useState([]);
    const params = useParams()

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products/`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])

    console.log(data)

    return (
        <Wrapper>
            <Collection>Возможно вас заинтересует</Collection>
            <Container> 
                {(data) ? data.slice(0, 5).map(item=>(
                    <CardItemSm item={item} key={item.id}/> 
                )) : <div>...</div>}
            </Container>
        </Wrapper>
    );
};

export default Suggestion;