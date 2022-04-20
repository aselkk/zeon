import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";
import close from '../../src/assets/img/callbackModal/close.png'
import { Button } from '@mui/material';
import SecondModal from './SecondModal'
import { Link } from "react-router-dom";
import { useFormik} from 'formik';
import * as Yup from 'yup';

function CartModal({cartItem}) {
    const [isOpen, setIsOpen] = useState((false));
    const [opacity, setOpacity] = useState(0);
    const [stateBtn, setStateBtn] = useState(true)
    const [modalState, setModalState] = useState(false)
    const [message, setMessage] = useState()

    let handleSubmit = async (values) => {
        const { firstName, lastName, email, phone, country, city, checked } = values;
        try {
        let res = await fetch("https://623c659f8e9af58789508891.mockapi.io/checkout", {
            method: "POST",
            body: JSON.stringify({
            name: firstName,    
            surname: lastName,
            mail: email,
            phone: phone,
            country: country,
            city: city,
            checked: checked,
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
    console.log(cartItem)
    const data = cartItem
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

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            checked: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Пожалуйста, заполните это поле.'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Пожалуйста, заполните это поле.'),
            email: Yup.string().email('Неверный адрес электронной почты').required('Пожалуйста, заполните это поле.'),
            phone: Yup.number()
                .required('Пожалуйста, заполните это поле.'),
            country: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Пожалуйста, заполните это поле.'),
            city: Yup.string()
            .required('Пожалуйста, заполните это поле.'),
            checked: Yup.boolean().oneOf([true], 'Cначала вы должны принять публичную оферту'),
            }),
            onSubmit: values => {
                handleSubmit(values)
                console.log(values)
            },
        });    

    useEffect(()=> {
        if (formik.values.firstName && formik.values.lastName && formik.values.email && formik.values.phone && formik.values.country && formik.values.city && formik.values.checked) {
            setStateBtn(false)
        }
        console.log(formik.initialValues, 'test');
    },[formik.values.firstName,formik.values.lastName,formik.values.email,formik.values.phone,formik.values.country,formik.values.city,formik.values.checked])
    
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
                    <Form  style={{display:'flex', flexDirection:'column'}} onSubmit={formik.handleSubmit}>
                    <Label htmlFor="firstName">Ваше имя</Label>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <Error>{formik.errors.firstName}</Error>
                    ) : null}
                    <Input
                    placeholder='Например Иван'
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <Label htmlFor="lastName">Ваша фамилия</Label>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <Error>{formik.errors.lastName}</Error>
                    ) : null}
                    <Input
                    placeholder='Например Иванов'
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <Label htmlFor="email">Электронная почта</Label>
                    {formik.touched.email && formik.errors.email ? (
                        <Error>{formik.errors.email}</Error>
                    ) : null}
                    <Input
                        placeholder='example@mail.com'
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <Label htmlFor="phone">Ваш номер телефона</Label>
                    {formik.touched.phone && formik.errors.phone ? (
                        <Error>{formik.errors.phone}</Error>
                    ) : null}
                    <Input
                        placeholder='Введите номер телефона'
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />

                    <Label htmlFor="country">Страна</Label>
                    {formik.touched.country && formik.errors.country ? (
                        <Error>{formik.errors.country}</Error>
                    ) : null}
                    <Input
                        placeholder='Введите страну'
                        id="country"
                        name="country"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                    />
                    <Label htmlFor="city">Город</Label>
                    {formik.touched.city && formik.errors.city ? (
                        <Error>{formik.errors.city}</Error>
                    ) : null}
                    <Input
                        placeholder='Введите город'
                        id="city"
                        name="city" 
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    {formik.touched.checked && formik.errors.checked ? (
                        <Error>{formik.errors.checked}</Error>
                    ) : null}
                    <div style={{display: 'flex', fontWeight: '500', fontSize: '15px', marginTop:'6px', alignItems:'center', marginBottom:'32px'}}>
                    <Check 
                        type="checkbox"
                        id="checked"  
                        name="checked" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.checked}/>
                    <label for="offer">Согласен с условиями </label><Link style={{textDecoration:'none', paddingLeft:'2px', color:'rgba(56,116,223,1)'}} to='/Offer'> публичной оферты</Link>
                    </div>

                    <Btn variant = {(stateBtn) ? 'disabled' : 'contained'} type="submit">Заказать</Btn>
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
    box-sizing: border-box;
`
const Input = styled.input`
    width: 392px;
    font-family: 'Montserrat';
    padding: 13px; 
    margin-bottom: 12px;
    border: 1px solid rgba(31, 31, 31, 0.08);
    box-sizing: border-box;
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
const Error = styled.div`
    color: red;
    font-size: 13px;
    margin:0 0 7px 0;
`