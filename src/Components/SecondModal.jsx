import React, { useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import done from '../../src/assets/img/callbackModal/done.png'
import telephone from '../../src/assets/img/FAB/telephone.png'
import close from '../../src/assets/img/callbackModal/close.png'


function FancyModalButton({show}) {
    const [isOpen, setIsOpen] = useState((true));
    const [opacity, setOpacity] = useState(0);


    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
        setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
        });
    }
    return (
        <div>
                <ModalProvider>
                <Callback onClick={toggleModal}>
                        <img src={telephone} style={{display: show ? 'inline' : 'none'}} />
                </Callback>
                <StyledModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}   
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                >
                    <CloseBtn onClick={toggleModal} img src={close} alt="" ></CloseBtn>
                        <img src={done} alt="" />
                        <Title>Cпасибо!</Title>
                        <Text>Ваша заявка была принята. Ожидайте, скоро Вам перезвонят!</Text>
                        <Btn onClick={toggleModal}>Продолжить покупки</Btn>
                </StyledModal>
                </ModalProvider>
        </div>
        
    );
}

export default FancyModalButton

const StyledModal = Modal.styled`
    width: 328px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
    padding: 29px 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
`
const Callback = styled.button `
    border: none; 
    background: none;
    cursor: pointer;
    position:fixed;
    top:360px;
    right:152px;
    z-index: 33;

`
const Title = styled.h1`
    font-weight: 500;
    font-size: 22px;
    color:#393939;
    margin-bottom: 6px;
    margin-top: 14px;

`
const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    color:#393939;
    margin-bottom: 12px;
    text-align: center;
`
const CloseBtn = styled.img`
    background: none;
    cursor: pointer;
    width: 14px;
    position: absolute;
    z-index: 1;
    top: 17px;
    right: 17px;
`
const Btn = styled.button`
    width: 280px;
    height: 44px;
    margin-top: 2px;
    background: black;
    color: white;
    border: none;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Montserrat';
    cursor: pointer;
`
