import React from 'react';
import styled from 'styled-components'
import About1 from '../assets/img/about-img/about1.png'
import About2 from '../assets/img/about-img/about2.png'
import About3 from '../assets/img/about-img/about3.png'

const AboutUs = styled.section `
    padding: 22px 99px;
    display: flex;
    align-items: center;
    background: #ECECEC;
`
const AboutArticle = styled.article `
    width: 465px; 
    background: #fff;
    padding: 12px 24px;
`
const AboutImg = styled.div `
    display: flex;
    flex-direction: column; 
    
`
const AboutHeader = styled.h2 `
    font-weight: 500;
    font-size: 24px; 
    color: #393939;
    margin-bottom: 8px;
`
const AboutParagraph = styled.p `
    font-weight: 500;
    font-size: 15px;
    color: #979797;
    line-height: 24px;
`

const About = () => {
    return (
        <AboutUs>
            <AboutImg>
                <img style={{paddingBottom: '24px'}} src={About1} alt="img" />
                <img src={About2} alt="img" />
            </AboutImg>
            <AboutImg>
                <img style={{padding: '24px'}} src={About3} alt="img" />
            </AboutImg>
            <AboutArticle>
                <AboutHeader> О нас </AboutHeader>
                <AboutParagraph>
                    У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и 
                    дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это комфортная, 
                    стильная и качественная одежда не только на каждый день, но и для любых ситуаций по доступным ценам.
                    Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей 
                    помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.
                    Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. 
                    У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! 
                    А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем 
                    Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, 
                    желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.
                    </AboutParagraph>
            </AboutArticle>
        </AboutUs>
    );
};

export default About;