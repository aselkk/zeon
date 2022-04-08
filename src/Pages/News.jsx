import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import newsImg from '../assets/img/newsImg.png'
import styled from 'styled-components'





const News = () => {

    const [data, setData] = useState(null);

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

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=8`
            );
        setData(response.data);
        };
        getData();

    }, []);

    console.log(data)

    

    return (
        <News>
            <h1 style={{fontWeight:'500', fontSize:'24px',marginBottom:'18px'}}>Новости</h1>

            <ul>
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
            
            
            
        </News>
    );
};

export default News;