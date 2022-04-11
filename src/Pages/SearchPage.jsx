import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components'
import {useParams} from 'react-router'
import CardItem from '../Components/Card'
import Suggestions from '../Components/Suggestions'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8px 8px 0;
    position: relative;
`
const Image = styled.img`
    width: 286px;
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
const Color = styled.p` 
`
const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    background:#ECECEC;
    padding: 22px 99px;

`
const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`
const NavItem = styled(NavLink)`
    text-decoration:none;
    &:visited,&:link {
        color: #393939;
}
`

const Search = ({searchValue, searchResult}) => {

    console.log(searchValue)
    console.log(searchResult)


    const [data, setData] = useState([]);

    const getInteresting = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products`)
        const jsonData = await fetchData.json()
        setData(jsonData)
    }

    useEffect(() => {
        getInteresting()
    }, [])
    return (
        // <div>
        //     {searchResult.map((item) => {
        //         return (
        //             <Card key={item.id}>
        //                 <Swiper
        //                 id='swiper'   
        //                 modules={[Scrollbar, A11y, Autoplay]}
        //                 spaceBetween={50}
        //                 autoplay={true}
        //                 scrollbar={{ draggable: true }}
        //                 >
        //             {item.image.map(img=>( 
        //                 <SwiperSlide key={img.id}><Image src={img} alt="" /></SwiperSlide>
        //             ))}
        //                 </Swiper>
        //             <CardInfo>
        //                 <Title>{item.title}</Title>
        //                 <Price><span style={{color:'#979797', textDecoration:'line-through', paddingRight:'3px'}}>{item.oldPrice} p</span>{item.price}  p</Price>
        //                 <Size>Размер: {item.size}</Size>
        //                 <div style={{display:'flex'}}> 
        //                     {item.color.map(color => (
        //                         <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'10px'}}></div>
        //                     ))}
        //                 </div>   
        //             </CardInfo>
        //         </Card>
        //         )
        //     })
        //     }
        // </div>
        <Wrapper>
            <h3 style={{fontWeight:'500', fontSize:'24px', color:'#393939'}}>Результаты поиска по запросу {searchValue}</h3>
        <Container> 
            { 
                (searchResult !== []) ? searchResult.map(item=>(
                        <CardItem item={item} key={item.id}/>
                )) : <div>
                        <p>По вашему запросу ничего не найдено</p>
                    </div>
            }
        </Container>
        <Suggestions/>
        </Wrapper>
    );
};

export default Search;