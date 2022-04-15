import React from 'react';
import styled from 'styled-components'
import minus from '../assets/img/cart/minus.png'
import plus from '../assets/img/cart/plus.png'
import deleteBtn from '../assets/img/cart/delete.png'
import line from '../assets/img/cart/line.png'
import { useState, useEffect } from 'react';
import CartModal from '../Components/CartModal'



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
const Title = styled.h3`
    font-weight: 500;
    font-size: 14px;
    color: #393939;
    margin-bottom: 16px;
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
const Order = styled.div`
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
    width: 14px;
    height: 14px;
`
const Total = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #979797;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const H3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color:#393939;
`
const Sum = styled.span`
    color:#393939;
    text-align: end;
`
const Name = styled.h3`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
`
const Details = styled.p`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 6px;
    color:#7C7C7C;
    display: flex;
    align-items: center;
`
const Color = styled.span`
    height: 8px; 
    width: 8px;
    border-radius: 50%;
    margin-left: 8px;
`
const Price = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-bottom:12px;
`
const OldPrice = styled.span`
    font-size: 14px;
    color: #ADADAD;
    text-decoration: line-through;
`
const Icon = styled.img`
    cursor: pointer;
`
const Counter = styled.p`
    font-weight:600;
    font-size: 16px;
    padding: 0 12px;
    display: flex;
    align-items: center;
`
const Line = styled.img`
    margin: 24px 0;
    width: 100%;
`
const Img = styled.img`
    width: 112px;
    height: 142px;
`

const Cart = () => {

    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')))
    const setTotalCostCallback = () => cartItem.reduce((acc, item) => acc + (item.oldPrice * item.count), 0);
    const totalQtyCallback = () => cartItem.reduce((acc, item) => acc + item.count, 0);
    const totalItemsCallback = () => cartItem.reduce((acc, item) => acc + item.quantity, 0);
    const setTotalDiscountAmountCallback = () => {
        return cartItem
            .map((item) => ({
                    ...item,
                    discountPrice: (item.oldPrice * item.count) / 100 * item.sale
                }))
            .reduce((acc, item) => acc + item.discountPrice, 0)
            .toFixed();
    }
    const [totalCost, setTotalCost] = useState(setTotalCostCallback);
    const [totalDiscountAmount, setTotalDiscountAmount] = useState(setTotalDiscountAmountCallback);
    const [totalQty, setTotalQty] = useState(totalQtyCallback)
    const [totalItems, setTotalItems] = useState(totalItemsCallback)
    console.log(totalItems)

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (loaded) return ;
            setCartItem(JSON.parse(localStorage.getItem('cartItem')))
        setLoaded(true)
    }, [loaded])

    function del(product) {
        for(let i = 0; i < cartItem.length; i++ ) {
            if (cartItem[i].id == product.id) {
                cartItem.splice(i, 1);
                localStorage.setItem("cartItem", JSON.stringify(cartItem));

                setTotalCost(totalCost - (product.oldPrice * product.count))
                setTotalDiscountAmount(totalDiscountAmount - (product.price * product.count))
                setTotalQty(totalQty - product.count)
                setTotalItems(totalItems - product.quantity)
                setLoaded(false)

                return;
        }
        }
    }

    const changeQty = (cardId, action) => {
        const item = cartItem.find((item) => item.id === cardId);

        if (item.count > 0) {
            action === 'increase' ? item.count += 1 : item.count -= 1
            setCartItem([...cartItem])
            setTotalCost(setTotalCostCallback)
            setTotalDiscountAmount(setTotalDiscountAmountCallback)
            setTotalQty(totalQtyCallback)
            setTotalItems(totalItemsCallback)

            localStorage.setItem('cartItem', JSON.stringify(cartItem));
        }

        if (item.count === 0) {
            del(item)
            setTotalCost(setTotalCostCallback)
            setTotalDiscountAmount(setTotalDiscountAmountCallback)
            setTotalQty(totalQtyCallback)
        }
    }

    return (
        <div>
            <Container>
                <Products>
                    {
                        (cartItem) ? cartItem.map((item) => (
                            <Item key={item.id}>
                                <DeleteBtn onClick={()=>del(item)}>
                                    <img src={deleteBtn} alt="" />
                                </DeleteBtn>
                                <Img src={item.image[1]} alt="" />
                                <Info>
                                    <Name>{item.title}</Name>
                                    <Details>Размер: {item.size}</Details>
                                    <Details>Цвет: 
                                            {item.color.map(color => (
                                                <Color style={{background: color}}></Color>
                                            ))}
                                    </Details>
                                    <Price>{item.price} p <OldPrice>{item.oldPrice} p</OldPrice></Price>
                                    <Count>
                                        <Icon onClick={() => changeQty(item.id, 'decrease')} src={minus} alt=""/>
                                        <Counter>{item.count}</Counter>
                                        <Icon onClick={()=> changeQty(item.id, 'increase')} src={plus} alt=""/>
                                    </Count>
                                </Info>
                            </Item>
                        )) : <H3>Ваша корзина пуста(( </H3>
                    }
                </Products>
                <Order>
                        <Title>Сумма заказа</Title>
                        <Total>Количество линеек: <Sum>{totalItems} шт.</Sum> </Total>
                        <Total>Количество товаров:<Sum>{totalQty} шт.</Sum> </Total>
                        <Total>Стоимость: <Sum>{totalCost} рублей</Sum></Total>
                        <Total>Скидка: <Sum>{totalDiscountAmount}  рублей</Sum></Total>
                        <Line src={line} alt="" />
                        <Total style={{marginBottom:'16px'}}>Итого к оплате: <Sum>{totalCost - totalDiscountAmount} рублей</Sum> </Total>
                        <CartModal/>
                </Order>
            </Container>
        </div>
    );
};

export default Cart;