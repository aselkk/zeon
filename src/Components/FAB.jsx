import React, {useState} from 'react';
import styled from 'styled-components';
import scroll from '../../src/assets/img/FAB/scroll.png'
import feedback from '../../src/assets/img/FAB/feedback.png'
import whatsapp from '../../src/assets/img/FAB/whatsapp.png'
import telegram from '../../src/assets/img/FAB/telegram.png'
import closeBtn from '../../src/assets/img/FAB/closeBtn.png'
import FancyModalButton from './FABModal'

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 500){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
};


    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            <FeedBack>
                <img src = {show ? closeBtn : feedback} style={{right: show ? '108px' : '105px'}} onClick={toggleShow} 
            />
            </FeedBack>
            <FancyModalButton show={show} />
            <Whatsapp target="_blank" href='https://wa.me/996707191199'>
                <img src={whatsapp} 
                style={{display: show ? 'inline' : 'none'}} 
            />
            </Whatsapp>
            <Telegram target="_blank" href='https://t.me/Zeonitcommunity'>
                <img src={telegram} 
                style={{display: show ? 'inline' : 'none'}} 
            />
            </Telegram>
            <ScrollBtn>
                <img src={scroll} onClick={scrollToTop} 
            />
            </ScrollBtn>  
            </div>
    );
}

export default ScrollButton;    


const ScrollBtn = styled.button `
    border: none; 
    background: none;
    cursor: pointer;
    position: fixed;
    top:645px;
    right: 108px;
    z-index: 100;
    height: 26px;
    width: 26px;
    @media screen and (max-width: 390px) 
    { 
        right: 13px;
    }
`
const FeedBack = styled.button `
    border: none; 
    background: none;
    cursor: pointer;
    position:fixed;
    top:700px;
    z-index: 1;
    right: 107px;
    width: 30px;
    @media screen and (max-width: 390px) 
    { 
        right: 13px;
    }

`
const Whatsapp = styled.a `
    border: none; 
    background: none;
    cursor: pointer;
    position:fixed;
    top:688px;
    right:203px;
    z-index: 2;
    @media screen and (max-width: 390px) 
    { 
        right: 155px;
    }
`
const Telegram = styled.a `
    border: none; 
    background: none;
    cursor: pointer;
    position:fixed;
    top:688px;
    right:254px;
    z-index: 2;
    @media screen and (max-width: 390px) 
    { 
        right: 102px;
    }
`