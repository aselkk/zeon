import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import cartIcon from '../../assets/img/cart/cartIcon.png'
import SimilarProd from '../../Components/SimilarProd'
import {Link} from 'react-router-dom'
import {HeartOutlined} from '@styled-icons/entypo/HeartOutlined'
import {Heart} from '@styled-icons/entypo/Heart'

const Product = () => {

    const params = useParams()
    const [data, setData] = useState({});
    const [cartPage, setCartPage] = useState([]);
    const [likepage, setLikePage] = useState([]);
    const [chosenColor, setChosenColor] = useState(null)
    const [itemClicked, setItemClicked] = useState(null)
    let idProd = params.product


    const getProduct = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products/${idProd}`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }       
    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
        let cartItem = JSON.parse(localStorage.getItem("cartItem"));
        cartItem?.map((id) => {
            if (id.id === data.id) {
            setCartPage(true);
            }
        });
    }, [cartPage, data]);

    
        function addToCart(data) {
            let cartItem = JSON.parse(localStorage.getItem("cartItem"));
        
            if (!cartItem) {
                cartItem = []
                localStorage.setItem("cartItem", JSON.stringify(cartItem));
                return;
            }
            for (let i = 0; i < cartItem.length; i++) {
                if (cartItem[i].id === data.id) {
                setCartPage(false);
                return;
                }
            }
            data = {...data, count: 1, chosenColor}
            console.log(data)
            cartItem.push(data);
            setCartPage(true);
            localStorage.setItem("cartItem", JSON.stringify(cartItem));
            console.log(cartItem)
            return;
        }

        useEffect(() => {
            let favorite = JSON.parse(localStorage.getItem("favorite"));
            favorite?.map((id) => {
                if (id.id === data.id) {
                setLikePage(true);
                }
            });
        }, [likepage, data]);
        
            function addToFav(data) {
                let favorite = JSON.parse(localStorage.getItem("favorite"));
            
                if (!favorite) {
                    favorite = [data];
                    localStorage.setItem("favorite", JSON.stringify(favorite));
                    return;
                }
                for (let i = 0; i < favorite.length; i++) {
                    if (favorite[i].id === data.id) {
                    setLikePage(false);
                    favorite.splice(i, 1);
                    localStorage.setItem("favorite", JSON.stringify(favorite));
                    return;
                    }
                }
                favorite.push(data);
                setLikePage(true);
                localStorage.setItem("favorite", JSON.stringify(favorite));
                return;
            }

            const handleClick = (color, index) => {
                console.log(color, index)
                setItemClicked(index)
                setChosenColor(color)
                console.log(chosenColor)
            }
        
        
            function numberWithSpaces(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

    return (
        <Wrapper>
        {
            data.image &&
            <Container>
                    <Images>
                        {data.image.slice(0,4).map((img,id) => (
                            <div>
                                <ProductImg key={id} src={img} alt="" />
                            </div>
                        ))}
                    </Images>
                
                <ProductInfo>  
                    <Title>{data.title}</Title>
                    <Details>??????????????: <Info>{data.art}</Info></Details>


                    <Details style={{display:'flex'}}> ????????: 
                    <div style={{display:'flex', alignItems:'center', paddingLeft:'6px'}}> 
                        {data.color.map((color, index) => (
                            <div 
                            key={index} 
                            onClick={() => {
                                handleClick(color, index)}
                            } 
                            style={{ border: index === itemClicked ?  '1px solid grey' : 'none', padding: '3px', cursor: 'pointer'}}>
                                <SelectColor key={index} style={{backgroundColor: color}}></SelectColor>
                            </div>
                        ))}
                    </div>
                    </Details>



                    <Price>{numberWithSpaces(data.price)} p <OldPrice>{numberWithSpaces(data.oldPrice)} p</OldPrice></Price>
                    <Details style={{fontSize:'16px'}}>?? ????????????: <br/><Info style={{color:'#6A6A6A', lineHeight:'25px'}}>{data.description}</Info></Details>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{paddingRight: '64px'}}>
                            <Details>?????????????????? ??????: <Info>{data.size}</Info></Details>
                            <Details>???????????? ??????????: <Info>{data.fabric}</Info></Details>
                        </div>
                        <div>
                            <Details>???????????????????? ?? ??????????????: <Info>{data.quantity}</Info></Details>
                            <Details>????????????????: <Info>{data.fabric}</Info></Details>
                        </div>
                    </div>
                    <div style={{display:'flex', marginTop:'28px'}}>
                        <AddToCart onClick={()=>addToCart(data)}>
                            <img style={{paddingRight:'11px'}} src={cartIcon} alt="" />
                            {cartPage !== true ? '???????????????? ?? ??????????????' : <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>???????????????? ?? ??????????????</Link>}
                        </AddToCart>
                        <AddToFav  onClick={()=>addToFav(data)}
                    key={data.id}>
                            {likepage !== true ? 
                        <HeartIcon key={data.id}/> : 
                        <HeartFilled  key={data.id}/>}
                        </AddToFav>
                    </div>
                </ProductInfo>
            </Container>
        }
        <div>
        </div>
        <SimilarProd dataItem={data} item={data}/>
        </Wrapper>
    );
};

export default Product; 


const Wrapper = styled.div `
    padding: 22px 99px;        
    background: #ECECEC;
    color: #393939;
    @media screen and (max-width: 390px) 
    { 
        padding: 10px 5px;    
    }
`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 390px) 
    { 
        flex-direction: column;
        overflow: auto;
        align-items:center;
    }
`
const ProductImg = styled.img`
    display: flex;
    width: 308px;
    margin-bottom: 8px;
    @media screen and (max-width: 390px) 
    { 
        width: 100px;
        margin:3px
    }

`
const ProductInfo = styled.div`
    width: 520px;
    height: fit-content;
    background: white;
    padding: 24px;  
    position: relative;
    @media screen and (max-width: 390px) 
    { 
        width: 278px;
        height: 490px;
        margin-top: 15px;
        padding: 18px;  
    }
`
const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    @media screen and (max-width: 390px) 
    { 
        font-size: 18px;
    }
`
const Details = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #1D1D1B;
    margin-top: 14px;
    @media screen and (max-width: 390px) 
    { 
        font-size: 13px;
        font-weight: 400px;
    }

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
    @media screen and (max-width: 390px) 
    { 
        font-size: 18px;
    }
`
const OldPrice = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #979797;
    text-decoration: line-through;
    @media screen and (max-width: 390px) 
    { 
        font-size: 14px;
    }

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
    position: relative;
`
const Images = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 625px;
    box-sizing: border-box;
    justify-content: space-between;
    @media screen and (max-width: 390px) 
    { 
        width: 250px;
        justify-content: center;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }
`
const HeartIcon = styled(HeartOutlined)`
    color: white;
    width: 2em;
    height: 2em;
    z-index: 1;
    position: absolute;
    top: 10px;
    left: 8px;
    @media screen and (max-width: 390px) 
    { 
        top: 8px;
        left: 6px;
    }
`
const HeartFilled = styled(Heart)`
    color: white;
    width: 2em;
    height: 2em;
    z-index: 1;
    position: absolute;
    top: 10px;
    left: 8px;
    @media screen and (max-width: 390px) 
    { 
        top: 8px;
        left: 6px;
    }
`
const SelectColor = styled.div`
    cursor: pointer;
    height:8px;
    width:8px;
    border-radius:50%;
`