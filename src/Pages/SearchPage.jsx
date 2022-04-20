import React, {useState, useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components'
import CardItem from '../Components/Card'
import Suggestions from '../Components/Suggestions'

const Search = ({searchValue, searchResult}) => {

    const [data, setData] = useState([]);

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])
    return (
        <Wrapper>
            <h3 style={{fontWeight:'500', fontSize:'24px', color:'#393939'}}>Результаты поиска по запросу: {searchValue}</h3>
        <Container> 
            { 
                (searchResult !== []) ? searchResult.map(item=>(
                        <CardItem item={item} key={item.id}/>
                )) : <div>
                        <p>По вашему запросу ничего не найдено</p>
                    </div>
            }
        </Container>
        <Suggestions/>
        </Wrapper>
    );
};

export default Search;

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    background:#ECECEC;
    padding: 22px 99px;

`
const Container = styled.div`
    padding: 22px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`