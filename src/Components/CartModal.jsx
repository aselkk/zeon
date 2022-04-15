import React, { useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";
import close from '../../src/assets/img/callbackModal/close.png'
import { Button } from '@mui/material';
import SecondModal from './SecondModal'
import { Link } from "react-router-dom";

function CartModal() {
    const [isOpen, setIsOpen] = useState((false));
    const [opacity, setOpacity] = useState(0);
    const [message, setMessage] = useState("");
    const [stateBtn, setStateBtn] = useState(true)
    const [state, setState] = useState({
        name: '',
        surname: '',
        mail: '',
        phoneNumber: '',
        country: '',
        city: ''
    })
    const [modalState, setModalState] = useState(false)



    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://623c659f8e9af58789508891.mockapi.io/checkout", {
            method: "POST",
            body: JSON.stringify({
            name: state.name,
            surname: state.surname,
            mail: state.mail,
            phoneNumber: state.phoneNumber,
            country: state.country,
            city: state.city,
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
        if(val.target.name === 'surname'){
            setState({...state, surname: val.target.value})
        }
        if(val.target.name === 'mail'){
            setState({...state, mail: val.target.value})
        }
        if(val.target.name === 'phoneNumber'){
            setState({...state, phoneNumber: val.target.value})
        }
        if(val.target.name === 'country'){
            setState({...state, country: val.target.value})
        }
        if(val.target.name === 'city'){
            setState({...state, city: val.target.value})
        }
    }

    const handleCheck = (e) => {
        if(e.target.name === 'offer'){
            setStateBtn(false)
        }
    }
    
    return (
        <div>
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
                >
                    <CloseBtn onClick={toggleModal} img src={close} alt="" ></CloseBtn>
                    <div>
                        <Title>Оформление заказа</Title>
                    </div>

                <Form onSubmit={handleSubmit}>
                        <Label for="name">Ваше имя</Label>
                        <Input
                        name='name'
                        type="text"
                        placeholder="Например Иван"
                        onChange={e => handleChange(e)}
                        required='true'
                        />
                        <Label for="name">Ваша фамилия</Label>
                        <Input
                        name='surname'
                        type="text"
                        placeholder="Например Иванов"
                        onChange={e => handleChange(e)}
                        required
                        />
                        <Label for="name">Электронная почта</Label>
                        <Input
                        name='mail'
                        type="text"
                        placeholder="example@mail.com"
                        onChange={e => handleChange(e)}
                        required
                        />
                        <Label for="name">Ваш номер телефона</Label>
                        <Input
                        name='phoneNumber'
                        type="text"
                        placeholder="Введите номер телефона"
                        onChange={e => handleChange(e)}
                        required
                        />
                        <Label for="name">Страна</Label>
                        <Input
                        name='country'
                        type="text"
                        placeholder="Введите страну"
                        onChange={e => handleChange(e)}
                        required
                        />
                        <Label for="name">Город</Label>
                        <Input
                        name='city'
                        type="text"
                        placeholder="Введите город"
                        onChange={e => handleChange(e)}
                        required='true'
                        minlength='2'
                        />                        
                        <div style={{display: 'flex', fontWeight: '500', fontSize: '15px', marginTop:'6px', alignItems:'center', marginBottom:'32px'}}>
                    <Check type="checkbox" id="offer" name="offer" onChange={e => handleCheck(e)}/>
                    <label for="offer">Согласен с условиями </label><Link style={{textDecoration:'none', paddingLeft:'2px', color:'rgba(56,116,223,1)'}} to='/Offer'> публичной оферты</Link>
                </div>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                    <Btn type="submit" onClick={handleSubmit} variant = {(stateBtn) ? 'disabled' : 'contained'}> Заказать </Btn>
                </Form>
                </StyledModal>
                </ModalProvider>
            ): (
                <SecondModal/>
            )}
            <OrderBtn type="submit" onClick={toggleModal}> Оформить заказ </OrderBtn>
        </div>
        
    );
}

export default CartModal;

const StyledModal = Modal.styled`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: white;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
    padding: 0 24px 32px 24px;
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
    width: 392px;
    font-family: 'Montserrat';
    padding: 13px; 
    margin-bottom: 12px;
    border: 1px solid rgba(31, 31, 31, 0.08);
    box-sizing: border-box;
    border-radius: 3px;
    color: #393939 !important;
    font-size: 14px;
    font-weight: 400;
    ::placeholder {
        color:  #D0D0D0;
    }
    &:focus {outline:none}
`
const Btn = styled(Button)`
    width: 392px;
    height: 44px;
    margin-top: 2px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #1D1D1B;
    color: white;
    border: none;
    font-weight: 500;
    font-size: 15px;
    font-family: 'Montserrat';

`
const Title = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color:#393939;
    margin: 32px 0 24px 0;
`
const CloseBtn = styled.img`
    background: none;
    cursor: pointer;
    width: 14px;
    position: absolute;
    z-index: 1;
    top: 38px;
    right: 26px;
`
const OrderBtn = styled.button`
    width: 100%;
    height:44px;
    background:#E5271B;
    color:white;
    text-align:center;
    border: none;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Montserrat';
    cursor: pointer;
    margin-top: 16px;
`
const Label = styled.label`
    font-weight: 500;
    font-size: 13px;
    color: #808080;
    margin-bottom: 4px;
`
const Check = styled.input`
    height: 18px;
    width: 18px;
    border: 1.2px solid #919191;
    margin-right: 11px;
`