import React, {useState, useEffect}from 'react';
import styled from '@emotion/styled';
import money from '../assets/img/advantages/money.png';
import truck from '../assets/img/advantages/truck.png';
import support from '../assets/img/advantages/support.png';
import shop from '../assets/img/advantages/shop.png';

const Advantages = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://62473fe84bd12c92f4fe0f68.mockapi.io/api/v1/advatages')
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (
        <Wrapper>
            <h1 style={{fontWeight:'500', fontSize:'24px'}}>Наши преимущества</h1>
            <Container>
                {data?.map(item => 
                        (<Item key={item.id}>
                            <img src={item.img} alt="icon" />
                            <Header>{item.title}</Header>
                            <Paragraph>{item.description}</Paragraph>
                        </Item>)
                )}
            </Container>
        </Wrapper>
    );
};

export default Advantages;


const Container = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 390px) 
    { 
        flex-direction: column;
    }
`
const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:286px;
height:248px;
background: white;
margin-right: 8px;
margin-top: 18px;
box-sizing: border-box;
padding: 24px 12px;

`
const Wrapper = styled.div`
padding: 22px 99px;
display: flex;
align-items: center;
flex-direction: column;
`
const Header = styled.h3`
font-weight: 500;
font-size: 14px;
color:#393939;
margin: 28px 0 10px 0
`
const Paragraph = styled.p`
font-weight: 400;
font-size: 14px;
color:#979797;
text-align: center;
`   
