import * as React from 'react';
import {useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import help from '../assets/img/help/help.png'

export default function Help() {

    const Wrapper = styled.div `
        display:flex;
        flex-direction: row;
        padding: 22px 99px;
        background: #ECECEC;

    `
    const Container = styled.div `
        margin-left: 24px;
    `

    const Header = styled.p`
        font-size:16px;
        font-weight: 400;
        padding: 0px 5px;
        font-family: 'Montserrat'
    `

    const Body = styled.p`
        font-family: 'Montserrat';
        font-size:14px;
        font-weight: 300;
        color:#354455;
        line-height: 22px;
        padding-left: 6px;
    `

    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/zeon')
        const jsonData = await fetchData.json()
        setData(jsonData[0].help)
    }

    useEffect(() => {   
        getData()
    }, [])

    return (
        <Wrapper>
            <img style={{height:'500px', width:'500px'}} src={data.image} alt="logo" />
            <Container>
                <h1 style={{fontWeight:'500', fontSize:'24px', marginBottom:'15px'}}>Помощь</h1>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Header>Как я могу заказать одежду?</Header>
                </AccordionSummary>
                <AccordionDetails style={{paddingTop: '0px'}}>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0',  borderTop:'none'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Как осуществляется доставка?</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Как будет упакован заказ?</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Есть ли возврат, при условии если одежда пришла не того размера?</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Как я могу оставить заявку на обратную связь</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Где производятся вещи?</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Header>Как осуществляется доставка?</Header>
                </AccordionSummary>
                <AccordionDetails>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Body>
                </AccordionDetails>
            </Accordion>
            </Container> 
        </Wrapper>
    );
}
