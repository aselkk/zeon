import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import cartIcon from '../../assets/img/cart/cartIcon.png'
import fav from '../../assets/img/cart/fav.png'
import favorite from '../../assets/img/cart/favorite.png'

const Wrapper = styled.div `
    padding: 22px 99px;        
    background: #ECECEC;
    color: #393939;
`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ProductImg = styled.img`
    display: flex;
    width: 308px;
    margin-bottom: 8px;

`
const ProductInfo = styled.div`
    width: 520px;
    height: 390px;
    background: white;
    padding: 24px;  
    position: relative;
`
const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
`
const Details = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #1D1D1B;
    margin-top: 14px;

`
const Info = styled.span`
    font-weight: 300;
    font-size: 14px;
    color: #393939;
`
const Price = styled.p`
    font-weight: 400;
    font-size: 24px;
    margin-top: 20px;
`
const OldPrice = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #979797;
    text-decoration: line-through;

`
const AddToCart = styled.button`
    width: 100%;
    height:44px;
    background: #1D1D1B;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Montserrat';
    cursor: pointer;
`
const AddToFav = styled.button`
    height: 44px;
    width: 44px;
    padding: 10px;
    background: #1D1D1B;
    color:white;
    text-align:center;
    border: none;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Montserrat';
    cursor: pointer;
    margin-left: 8px;
`
const Images = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 625px;
    box-sizing: border-box;
    justify-content: space-between
`

const Product = () => {
    const params = useParams()
    const [data, setData] = useState({});
    let idProd = params.product
    const id = params.id
    //Id  коллекции

    const getProduct = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products/${idProd}`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }   

    console.log('hello',data.title)      
    
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <Wrapper>
        {
            data.image &&
            <Container>
                    <Images>
                        {data.image.slice(0,4).map(img => (
                            <div>
                                <ProductImg src={img} alt="" />
                            </div>
                        ))}
                    </Images>
                
                <ProductInfo>  
                    <Title>{data.title}</Title>
                    <Details>Артикул: <Info>{data.art}</Info></Details>
                    <Details style={{display:'flex'}}> Цвет: 
                    <div style={{display:'flex', alignItems:'center', paddingLeft:'6px'}}> 
                        {data.color.map(color => (
                            <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'16px'}}></div>
                        ))}
                    </div>
                    </Details>
                    <Price>{data.price} p <OldPrice>{data.oldPrice} p</OldPrice></Price>
                    <Details style={{fontSize:'16px'}}>О товаре: <br/><Info style={{color:'#6A6A6A', lineHeight:'25px'}}>{data.description}</Info></Details>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{paddingRight: '64px'}}>
                            <Details>Размерный ряд: <Info>{data.size}</Info></Details>
                            <Details>Состав ткани: <Info>{data.fabric}</Info></Details>
                        </div>
                        <div>
                            <Details>Количество в линейке: <Info>{data.quantity}</Info></Details>
                            <Details>Материал: <Info>{data.fabric}</Info></Details>
                        </div>
                    </div>
                    <div style={{display:'flex', marginTop:'28px'}}>
                        <AddToCart>
                            <img style={{paddingRight:'11px'}} src={cartIcon} alt="" />
                            Добавить в корзину
                        </AddToCart>
                        <AddToFav>  
                            <img src={fav} alt=""/>
                        </AddToFav>
                    </div>
                </ProductInfo>
            </Container>
        }
        </Wrapper>
    );
};

export default Product;