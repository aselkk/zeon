import React from 'react';
import styled from 'styled-components'
import cart from '../assets/img/cart/cart.png'
import minus from '../assets/img/cart/minus.png'
import plus from '../assets/img/cart/plus.png'
import deleteBtn from '../assets/img/cart/delete.png'
import line from '../assets/img/cart/line.png'
import { useState, useEffect } from 'react';

const Container = styled.div `
    padding: 22px 99px;        
    background: #ECECEC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #393939;
`
const Products = styled.div`
    display: flex; 
    flex-direction: column;
`
const Item = styled.div`
    width: 768px;
    height:166px;
    background: white;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    position: relative
`
const Info = styled.div`
    margin-left:16px;
`
const Count = styled.div`
    display: flex;
    flex-direction: row;
`
const Total = styled.div`
    width: 384px;
    height: 311px;
    background: white;
    padding: 24px;
    position: relative;

`
const DeleteBtn = styled.button`
    position: absolute;
    right: 17px;
    top: 17px;
    background: none;
    border: none;
    cursor: pointer;
`
const StyledP = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #979797;
    margin-bottom: 12px;
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
`
const H3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color:#393939;
`

const cartItem = JSON.parse(localStorage.getItem('cartItem'));


const Cart = () => {

    const [cartItem, setCartItem] = useState([])

    useEffect(()=>{
        setCartItem(JSON.parse(localStorage.getItem('cartItem')))
    },[cartItem])

    function del(product) {
        for(let i = 0; i < cartItem.length; i++ ) {
            if (cartItem[i].id == product) {
                cartItem.splice(i, 1);
                localStorage.setItem("cartItem", JSON.stringify(cartItem));
                return;
        }
        }
    }
    
    return (
        <div>
            <Container>
                <Products>
                    {
                        (cartItem) ? cartItem.map((item) => (
                            <Item>
                                <DeleteBtn onClick={()=>del(item.id)}><img style={{width: '14px', height: '14px'}} src={deleteBtn} alt="cart" /></DeleteBtn>
                                <img style={{width: '112px', height: '142px'}} src={item.image[1]} alt="cart" />
                                <Info>
                                    <h3 style={{fontWeight:'400', fontSize:"14px", marginBottom:'15px'}}>{item.title}</h3>
                                    <p style={{fontWeight:'400', fontSize:"13px", color:'#7C7C7C',marginBottom:'6px'}}>Размер: {item.size}</p>
                                    <p style={{fontWeight:'400', fontSize:"13px", color:'#7C7C7C',marginBottom:'6px'}}>Цвет: {item.color}</p>
                                    <p style={{fontWeight:'500', fontSize:"18px",marginBottom:'12px'}}>{item.price}</p>
                                    <Count>
                                        <img src={minus} alt="minus" /> <p style={{fontWeight:'600', fontSize:"16px", padding:'0 12px', display: 'flex', alignItems:'center'}}>1</p> <img src={plus} alt="plus" />
                                    </Count>
                                </Info>
                            </Item>
                        )) : <H3>Корзина пуста</H3>
                    } 
                </Products>
                <Total>
                    <h3 style={{fontWeight:'500', fontSize:"14px",marginBottom:'16px'}}>Сумма заказа</h3>
                    <StyledP>Количество линеек:</StyledP>
                    <StyledP>Количество линеек:</StyledP>
                    <StyledP>Стоимость:</StyledP>
                    <StyledP>Скидка:</StyledP>
                    <img style={{margin:'24px 0', width:'100%'}} src={line} alt="" />
                    <StyledP style={{marginBottom:'16px'}}>Итого к оплате:</StyledP>
                    <OrderBtn>Оформить заказ</OrderBtn>
                </Total>
            </Container>
        </div>
    );
};

export default Cart;