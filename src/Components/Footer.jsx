import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import phone from '../assets/img/footer-img/phone.png'
import mail from '../assets/img/footer-img/mail.png'
import instagram from '../assets/img/footer-img/instagram.png'
import telegram from '../assets/img/footer-img/telegram.png'
import whatsapp from '../assets/img/footer-img/whatsapp.png'
import { Link } from "react-router-dom";

const Wrapper = styled.section`
    background: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 48px 99px 76px 99px; 

`
const Column = styled.div`
    display: flex; 
    flex-direction: column; 
`
const Title = styled.h3`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 18px;
`
const Copyright = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #B9B9B9;
    position: relative;
    top: 60px;
`
const Icon = styled.img `
    padding-right: 7px
`
const Info = styled.a`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 12px;
    text-decoration: none;
    &:visited,&:link { color: white}
`


const Footer = () => {


    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/zeon')
        const jsonData = await fetchData.json()
        setData(jsonData[0].info)
    }


    useEffect(() => {
        getData()
    }, [])

    console.log('')
    return (
        <Wrapper>
            <div>
                <Link to='/'><img src={data.logo2} alt="img"/></Link>
                <Copyright>Developed by Zeon 2022</Copyright>
            </div>
            <Column>
                <Title>Компания</Title>
                <Info href="/about"> О нас</Info>
                <Info href="/news"> Новости</Info>
                <Info href="/help">Помощь</Info>
            </Column>
            <Column>
                <Title>Контакты</Title>
                <Info href="{data.phone1}"> <Icon src={phone} alt="" />{data.phone1}</Info>
                <Info href="{data.phone2}"> <Icon src={phone} alt="" />{data.phone2}</Info>
                <Info target="_blank" href="mailto:{data.mail}"><Icon src={mail} alt="" /> {data.mail}</Info>
            </Column>
            <Column>
                <Title>Мы в социальных сетях:</Title>
                <Info target="_blank" href={data.instagram}><Icon src={instagram} alt="" /> Instagram</Info>
                <Info target="_blank" href={data.telegram}><Icon src={telegram} alt="" /> Telegram</Info>
                <Info target="_blank" href={data.whatsapp}><Icon src={whatsapp} alt="" /> WhatsApp</Info>
            </Column>
        </Wrapper>
    );
};

export default Footer;