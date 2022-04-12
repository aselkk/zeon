import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import { NavLink } from "react-router-dom";
import CardItem from '../../Components/Card'
import { Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import unfavorite from '../../assets/img/unfavorite.png'
import ReactPaginate from 'react-paginate';

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
const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:#ECECEC;

`


const CollectionItem = () => {  
    const params = useParams()
    const [data, setData] = useState([]);

    const getCollections = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/storage/${params.id}`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }
    
    useEffect(() => {
        getCollections()    
    }, [])
    
    return (
        <Wrapper>
            <Collection style={{textAlign:'center', marginTop:'32px'}}>{data.collection}</Collection> 
        <Container> 
            {(data.data) ? data.data.map(item=>(
                <CardItem item={item} key={item.id}/>
            )) : <div>...</div>}
        </Container>
        </Wrapper>
    );
};
export default CollectionItem;
