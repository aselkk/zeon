import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import newsImg from '../assets/img/newsImg.png'
import styled from 'styled-components'

const News = () => {

    const News = styled.div`
        padding: 22px 99px;        
        background: #ECECEC;
    `

    const NewsItem = styled.li`
        display:flex;
        flex-direction:row-reverse;
        background: white;
        padding: 16px;
        margin-bottom:12px;
    `

    const Article = styled.div`
        display: flex;
        flex-direction: column;
        padding: 16px;
    `

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        if(fetching) {
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
            .then(response => {
                setData([...data, ...response.data])
                setCurrentPage(prev => prev + 1)
            })
            .finally(() => setFetching(false))
        }
    }, [fetching])
    


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    }

    return (
        <News>
            <h1 style={{fontWeight:'500', fontSize:'24px',marginBottom:'18px'}}>Новости</h1>
            {data.length ? (
                <ul data={data}>
                {data && data.map(({ id, title,body }) => (
                <NewsItem key={id}>
                    <Article>
                    <h3 style={{fontWeight:'500', fontSize:'16px', marginBottom:'6px', textTransform:'capitalize'}}>{title}</h3>
                    <p style={{fontWeight:'300', fontSize:'14px', color:'#5B5B5B'}}>{body}</p>
                    </Article>
                    <img src={newsImg} alt="img" />
                </NewsItem>
                ))}
            </ul> 
            ) : null}
        
        </News>
    );
};

export default News;