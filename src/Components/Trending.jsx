import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
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
        setShowMore(true)
    }

    const hits = (data) ? data.filter((item)=> item.inHit === true) : null

    return (
        <Wrapper>
            <Collection>Хит продаж</Collection> 
            <Container> 
                {hits?.slice(0, showMore ? 16 : 8).map((item, index)=>(
                    <div>
                        <CardItem item={item} key={index}/>
                    </div>
                ))}
        </Container>    
        <More onClick={handleClick}>Еще</More>
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
    @media screen and (max-width: 390px) 
    { 
        padding: 22px 0;
    }
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

