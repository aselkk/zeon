import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

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
    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/zeon')
        const jsonData = await fetchData.json()
        setData(jsonData[0].about)
    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <AboutUs>
            <AboutImg>
                <img style={{paddingBottom: '24px'}} src={data.img1} alt="img" />
                <img src={data.img2} alt="img" />
            </AboutImg>
            <AboutImg>
                <img style={{padding: '24px'}} src={data.img3} alt="img" />
            </AboutImg>
            <AboutArticle>
                <AboutHeader>{data.title}</AboutHeader>
                <AboutParagraph>{data.text}</AboutParagraph>
            </AboutArticle>
        </AboutUs>
    );
};

export default About;