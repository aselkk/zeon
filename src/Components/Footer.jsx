import React from 'react';
import logoFooter from '../assets/img/footer-img/logoFooter.png'
import styled from 'styled-components'
import phone from '../assets/img/footer-img/phone.png'
import mail from '../assets/img/footer-img/mail.png'
import instagram from '../assets/img/footer-img/instagram.png'
import telegram from '../assets/img/footer-img/telegram.png'
import whatsapp from '../assets/img/footer-img/whatsapp.png'
import { Link } from "react-router-dom";

const FooterWrap = styled.section`
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

const FooterH = styled.h3`
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
    const StyledA = styled.a`
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
    return (
        <FooterWrap>
            <div>
                <Link to='/'><img src={logoFooter} alt="img" /></Link>
                <Copyright>Developed by Zeon 2022</Copyright>
            </div>
            <Column>
                <FooterH>Компания</FooterH>
                <StyledA href="/about"> О нас</StyledA>
                <StyledA href="/news"> Новости</StyledA>
                <StyledA href="/help">Помощь</StyledA>
            </Column>
            <Column>
                <FooterH>Контакты</FooterH>
                <StyledA href="tel:+996707191199"> <Icon src={phone} alt="" />+996 707 191 199 </StyledA>
                <StyledA href="tel:+996707191199"> <Icon src={phone} alt="" />+996 707 191 199 </StyledA>
                <StyledA target="_blank" href="mailto:zeonithub@gmail.com"><Icon src={mail} alt="" />  mail@gmail.com</StyledA>
            </Column>
            <Column>
                <FooterH>Мы в социальных сетях:</FooterH>
                <StyledA target="_blank" href="https://www.instagram.com/zeon.ithub/"><Icon src={instagram} alt="" /> Instagram</StyledA>
                <StyledA target="_blank" href="https://t.me/Zeonitcommunity"><Icon src={telegram} alt="" /> Telegram</StyledA>
                <StyledA target="_blank" href=" https://wa.me/996707191199"><Icon src={whatsapp} alt="" /> WhatsApp</StyledA>
            </Column>
        </FooterWrap>
    );
};

export default Footer;