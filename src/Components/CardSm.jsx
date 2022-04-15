import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import {Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {HeartOutlined} from '@styled-icons/entypo/HeartOutlined'
import {Heart} from '@styled-icons/entypo/Heart'

const CardItemSm = ({item}) => {   
        const [likepage, setLikePage] = useState([]);

    useEffect(() => {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        favorite?.map((id) => {
            if (id.id === item.id) {
            setLikePage(true);
            }
        });
    }, [likepage, item]);
    
        function putProducts(item) {
            let favorite = JSON.parse(localStorage.getItem("favorite"));
        
            if (!favorite) {
                favorite = [item];
                localStorage.setItem("favorite", JSON.stringify(favorite));
                return;
            }
            for (let i = 0; i < favorite.length; i++) {
                if (favorite[i].id === item.id) {
                setLikePage(false);
                favorite.splice(i, 1);
                localStorage.setItem("favorite", JSON.stringify(favorite));
                return;
                }
            }
            favorite.push(item);
            setLikePage(true);
            localStorage.setItem("favorite", JSON.stringify(favorite));
            return;
        }

    return (
            <Card key={item.id} >
                <div
                    onClick={()=>putProducts(item)}
                    key={item.id}>
                        {likepage !== true ? 
                        <HeartIcon key={item.id}/> : 
                        <HeartFilled  key={item.id}/>}
                </div>
                <NavItem key={item.id} style={{textDecoration:'none'}} to={`/collection/1/product/`+item.id}>
                <Swiper
                    style={{width:' 226px', height: 'auto'}}
                    id='swiper'   
                    modules={[Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={true}
                    scrollbar={{ draggable: true }}
                    >
                    {item.image.map(img=>( 
                    <SwiperSlide   
                    SwiperSlide key={img.id}>            
                    <Image src={img} alt="" />
                    </SwiperSlide>
                    ))}
                </Swiper>
                <CardInfo>
                <Price><span style={{color:'#979797', textDecoration:'line-through', paddingRight:'3px'}}>{item.oldPrice} p</span>{item.price}  p</Price>
                    <Title>{item.title}</Title>
                    <Size>Размер: {item.size}</Size>
                    <div style={{display:'flex'}}> 
                        {item.color.map(color => (
                            <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'10px'}}></div>
                        ))}
                    </div>   
                </CardInfo>
                </NavItem> 
            </Card>   
        
    );
};

export default CardItemSm;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8px 8px 0;
    position:relative;
`
const Image = styled.img`
    width: 226px;
    position:relative;
`
const CardInfo = styled.div`
    background: white;
    padding: 6px 8px;
`
const Title = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 6px
`
const Price = styled.p`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 6px
`
const Size = styled.p`
    font-weight: 400;
    font-size: 13px;
    color: #7C7C7C;
    margin-bottom: 6px
`
const NavItem = styled(NavLink)`
    text-decoration:none;
    &:visited,&:link {
    color: #393939;
}`

const HeartIcon = styled(HeartOutlined)`
    color: white;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    right: 12px;
    z-index: 100;
    top: 12px;
`
const HeartFilled = styled(Heart)`
    color: #E5271B;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    right: 12px;
    z-index: 100;
    top: 12px;
`