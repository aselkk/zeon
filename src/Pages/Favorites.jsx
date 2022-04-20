import React, { useState, useEffect } from 'react';
import CardItem from '../Components/Card'
import styled from 'styled-components'
import CardItemSm from '../Components/CardSm'

const Favorites = () => {

    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])

    useEffect(() => {
        if (loaded) return ;
            setFavorites(JSON.parse(localStorage.getItem('favorite')))
        setLoaded(true)
    }, [loaded])
    
    return (
        <Wrapper>
            <Collection> Избранные товары </Collection>
            <Container> 
            {
                (favorites?.length > 0) ? favorites.map((item, index) => (
                    <CardItem item={item} key={index}/>
                )) : <div>
                        <H3>У Вас пока нет избранных товаров</H3>
                        <Collection>Возможно вас заинтересует</Collection>
                        <Container>     
                            {(data) ? data.slice(0, 5).map((item, index)=>(
                                <CardItemSm item={item} key={index} /> 
                            )) : <div></div>}
                        </Container>
                    </div>
            }
            </Container>
            
        </Wrapper>
    );
}

export default Favorites;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #393939;
    
`

const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    margin-top: 44px;
    margin-bottom: 16px;

`
const Wrapper = styled.div `
    display: flex;
    align-items: start;
    flex-direction: column;
    background: #ECECEC;
    padding: 22px 99px;

`
const H3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color:#393939;
`