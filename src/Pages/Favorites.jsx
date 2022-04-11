import React, { useState, useEffect } from 'react';
import CardItem from '../Components/Card'
import styled from 'styled-components'
import CardItemSm from '../Components/CardSm'


const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    color: #393939;
    
`

const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    margin-top: 44px;
    padding: 0 99px;

`
const Wrapper = styled.div `
    display: flex;
    align-items: start;
    flex-direction: column;
    background: #ECECEC;
`
const H3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color:#393939;
`


const Favorites = () => {

    const [data, setData] = useState([]);

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])

    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        setFavorites(JSON.parse(localStorage.getItem('favorite')))
    },[favorites])
    return (
        <Wrapper>
            <Collection> Избранные товары </Collection>
            <Container> 
            {
                (favorites.length > 0) ? favorites.map((item) => (
                    <CardItem item={item} key={item.id}/>
                )) : <div>
                        <H3>У Вас пока нет избранных товаров</H3>
                    </div>
            }
            </Container>
            <Collection>Возможно вас заинтересует</Collection>
            <Container> 
                {(data) ? data.slice(0, 5).map(item=>(
                    <CardItemSm item={item} key={item.id}/> 
                )) : <div>...</div>}
            </Container>
        </Wrapper>
    );
}

export default Favorites;
