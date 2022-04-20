import * as React from 'react';
import {useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {RiArrowDownSLine} from 'react-icons/ri';
import styled from 'styled-components';

export default function Help() {

    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/zeon')
        const jsonData = await fetchData.json()
        setData(jsonData[0].help)
    }

    useEffect(() => {   
        getData()
    }, [])

    const helpItems = data.helpItems

    return (
        <Wrapper>
            <img style={{height:'500px', width:'500px'}} src={data.image} alt="logo" />
            <Container>
                <h1 style={{fontWeight:'500', fontSize:'24px', marginBottom:'15px'}}>Помощь</h1>
                {(helpItems) ? helpItems.map((item) => (
                    <Accordion style={{marginBottom:'12px', boxShadow:'none', borderRadius:'0',  borderTop:'none'}}>
                    <AccordionSummary
                    expandIcon={<RiArrowDownSLine style={{width: '29px', height: '30px'}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Header>{item.title}</Header>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Body>
                        {item.text}
                    </Body>
                    </AccordionDetails>
                </Accordion>
                )) : null}
            </Container> 
        </Wrapper>
    );
}

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
    font-family: 'Montserrat';
    color: #393939;
    `
const Body = styled.p`
    font-family: 'Montserrat';
    font-size:14px;
    font-weight: 300;
    color:#354455;
    line-height: 22px;
    padding-left: 6px;
    `