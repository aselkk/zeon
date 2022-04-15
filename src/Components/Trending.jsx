import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardItem from './Card'

const Trending = () => {    
    const [data, setData] = useState([]);
    const [showMore, setShowMore] = useState(false)

    const getClassic = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }
    
    useEffect(() => {
        getClassic()
    }, [showMore])
    
    const handleClick = () => {
        setShowMore(!showMore)
    }

    const hits = (data) ? data.filter((item)=> item.inHit === true) : null

    return (
        <Wrapper>
            <Collection>Хит продаж</Collection> 
            <Container> 
                {hits?.slice(0, showMore ? 16 : 8).map(item=>(
                    <div>
                        <Triangle>
                        </Triangle>
                        <Sale>{item.sale}%</Sale>
                        <CardItem item={item} key={item.id}/>
                    </div>
                ))}
        </Container>    
        <More onClick={handleClick}>{!showMore ? "Еще" : 'Скрыть'}</More>
        </Wrapper>
    );
};

export default Trending;


const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    
`
const More = styled.button`
    color: white;
    background: black;
    border: none;
    padding: 8px 38px;
    margin-top: 16px;
    cursor: pointer;
`
const Wrapper = styled.div `
    margin: 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
