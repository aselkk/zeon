import React, {useState, useEffect}from 'react';
import styled from 'styled-components'

const Container = styled.div `
    padding: 22px 99px;        
    background: #ECECEC;
`

const Offer = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/zeon')
        const jsonData = await fetchData.json()
        setData(jsonData[0].offer)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)
    return (
        <Container>
            <h2 style={{fontWeight:'500', fontSize:'24px', color:'#393939', marginBottom:'18px'}}>{data.title}</h2>
            <p 
                style={{fontWeight:'300', fontSize:'14px', color:'#5B5B5B', background:'white', padding:'16px', lineHeight:'23px'}}>
                {data.text}
            </p>
        </Container>
    );
};

export default Offer;