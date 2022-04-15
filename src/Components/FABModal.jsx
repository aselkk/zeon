import React, { useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";
import telephone from '../../src/assets/img/FAB/telephone.png'
import close from '../../src/assets/img/callbackModal/close.png'
import user from '../../src/assets/img/callbackModal/user.png'
import phone from '../../src/assets/img/callbackModal/phone.png'
import { Button } from '@mui/material';
import SecondModal from './SecondModal'

function FancyModalButton({show}) {
    const [isOpen, setIsOpen] = useState((false));
    const [opacity, setOpacity] = useState(0);
    const [message, setMessage] = useState("");
    const [stateBtn, setStateBtn] = useState(true)
    const [state, setState] = useState({
        name: '',
        phone: ''
    })
    const [modalState, setModalState] = useState(false)

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://623c10012e056d1037f94796.mockapi.io/api/v1/call_back", {
            method: "POST",
            body: JSON.stringify({
            name: state.name,
            number: state.phone,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let resJson = await res.json();
        console.log(resJson)
        if (res.status === 201) {
            setModalState(true)
            setMessage("User created successfully");
        } 
        } catch (err) {
        console.log(err);
        }
    };

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
    const handleChange = (val) => {
        if(val.target.name === 'name'){
            setState({...state, name: val.target.value})
        }
        if(val.target.name === 'phone')    {
            setState({...state, phone: val.target.value})
            setStateBtn(false)
        }
        
    }
    
    return (
        <div>
            <Callback onClick={toggleModal}>
                <img src={telephone} style={{display: show ? 'inline' : 'none'}} />
            </Callback>
            {(!modalState) ? (
                <ModalProvider>
                <StyledModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}   
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}
                ><CloseBtn onClick={toggleModal} img src={close} alt="" ></CloseBtn>
                    <div >
                        <Title>Если у вас остались вопросы</Title>
                        <Text>Оставьте заявку и мы обязательно Вам перезвоним</Text>
                    </div>
                <Form onSubmit={handleSubmit}>
                    <div style={{position: 'relative'}}>
                        <Input
                        name='name'
                        type="text"
                        placeholder="Как к Вам обращаться?"
                        onChange={e => handleChange(e)}
                        />
                        <Icon><img src={user} alt="" /></Icon>
                    </div>
                    <div style={{position: 'relative'}}>
                        <Input
                        name='phone'
                        type="text"
                        placeholder="Номер телефона"
                        onChange={e => handleChange(e)}
                        />
                        <Icon><img src={phone} alt="" /></Icon>
                    </div>
                    <Btn type="submit" onClick={handleSubmit} variant = {(stateBtn) ? 'disabled' : 'contained'}> Заказать звонок </Btn>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </Form>
                </StyledModal>
                </ModalProvider>
            ): (
                <SecondModal/>
            )}
            
        </div>
        
    );
}

export default FancyModalButton

const StyledModal = Modal.styled`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
    padding: 38px;
    display: flex;
    flex-direction: column;
    position: relative;
`
const Form = styled.form`
    display: flex;
    flex-direction: column; 
    position: relative; 
`
const Input = styled.input`
    width: 360px;
    height: 44px;
    margin-bottom: 10px;
    padding-left: 44px; 
    border: 1px solid rgba(31, 31, 31, 0.08);
    box-sizing: border-box;
    border-radius: 3px;
    color: #BEBEBE !important;
    font-size: 14px;
    font-weight: 400;
    ::placeholder {
        color:  #BEBEBE;
    }
    &:focus {outline:none}
`
const Btn = styled(Button)`
    // width: 360px;   
    // height: 44px;
    // margin-top: 2px;
    // background:  #1D1D1B;
    // color: white;
    // border: none;
    // font-weight: 500;
    // font-size: 15px;
    // font-family: 'Montserrat';
`
const Callback = styled.button `
    border: none; 
    background: none;
    cursor: pointer;
    position:fixed;
    top:688px;
    right:152px;
    z-index: 33;

`
const Title = styled.h1`
    font-weight: 500;
    font-size: 20px;
    color:#393939;
    margin-bottom: 6px;

`
const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    color:#393939;
    margin-bottom: 12px;
    max-width: 360px;
`
const Icon = styled.span`
    position: absolute; 
    left: 14px;
    top: 11px;
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