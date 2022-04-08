import React from 'react';
import styled from '@emotion/styled';
import money from '../assets/img/advantages/money.png';
import truck from '../assets/img/advantages/truck.png';
import support from '../assets/img/advantages/support.png';
import shop from '../assets/img/advantages/shop.png';

const Advantages = () => {

    const Container = styled.div`
        display: flex;
        flex-direction: row;
    `
    const Item = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width:286px;
        height:248px;
        background: white;
        margin-right: 8px;
        margin-top: 18px;
        box-sizing: border-box;
        padding: 24px 12px;
    `
    const Wrapper = styled.div`
        padding: 22px 99px;
        display: flex;
        align-items: center;
        flex-direction: column;
    `
    const Header = styled.h3`
        font-weight: 500;
        font-size: 14px;
        color:#393939;
        margin: 28px 0 10px 0
    `
    const Paragraph = styled.p`
        font-weight: 400;
        font-size: 14px;
        color:#979797;
        text-align: center;
    `   

    return (
        <Wrapper>
            <h1 style={{fontWeight:'500', fontSize:'24px'}}>Наши преимущества</h1>
            <Container>
                <Item>
                    <img src={money} alt="icon" />
                    <Header>Удобные способы оплаты</Header>
                    <Paragraph>Мы предлагаем возможность безналичной оплаты</Paragraph>
                </Item>
                <Item>
                    <img src={truck} alt="icon" />
                    <Header>Cвоевремнная доставка</Header>
                    <Paragraph>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</Paragraph>
                </Item>
                <Item>
                    <img src={support} alt="icon" />
                    <Header>Профессиональная консультация</Header>
                    <Paragraph>Мы проконсультируем и индивидуально подойдем к Вашему заказу </Paragraph>
                </Item>
                <Item>
                    <img src={shop} alt="icon" />
                    <Header>Акции и бонусы для покупателей</Header>
                    <Paragraph>Промокоды со скидками для постоянных клиентов, акции на новые позиции</Paragraph>
                </Item>
            </Container>
        </Wrapper>
    );
};

export default Advantages;