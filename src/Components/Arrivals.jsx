// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components'

// const Container = styled.div`
//     padding: 22px 99px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     color: #393939;

// `

// const Card = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin: 0 8px 8px 0;

// `

// const Image = styled.img`
//     width: 286px;

// `
// const CardInfo = styled.div`
//     background: white;
//     padding: 6px 8px;
// `
// const Title = styled.p`
//     font-weight: 400;
//     font-size: 14px;
//     margin-bottom: 6px
// `
// const Price = styled.p`
//     font-weight: 500;
//     font-size: 16px;
//     margin-bottom: 6px
// `
// const Size = styled.p`
//     font-weight: 400;
//     font-size: 13px;
//     color: #7C7C7C;
//     margin-bottom: 6px
// `
// const Color = styled.p` 
// `
// const Collection = styled.h2`
//     font-weight: 500;
//     font-size: 24px;
// `
// const More = styled.button`
//     color: white;
//     background: black;
//     border: none;
//     padding: 8px 38px;
//     margin-top: 16px;
//     cursor: pointer;
// `

// const Wrapper = styled.div `
// margin: 44px 0;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;

// `


// const Arrivals = () => {    
//     const [data, setData] = useState([]);

//     const getArrivals = async () => {
//         const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/hitsarrivals/2')
//         const jsonData = await fetchData.json()
//         setData(jsonData)
//     }

//     console.log(data)
    
//     useEffect(() => {
//         getArrivals()
//     }, [])
    
//     return (
//         <Wrapper>
//             <Collection style={{textAlign:'center'}}>Новинки</Collection>   
//             <Container> 
//                 {(data && data.data) ? data.data.slice(0, 4).map(item=>(
//                     <Card key={item.id}>
//                         <Image src={item.image} alt="" />
//                         <CardInfo>
//                             <Title>{item.title}</Title>
//                             <Price>{item.price} p</Price>
                            
//                             <Size>Размер: {item.size}</Size>
//                             <div style={{display:'flex'}}> 
//                             {item.color.map(color => (
//                                 <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'10px'}}></div>
//                             ))}
//                             </div>
//                         </CardInfo>
//                     </Card>   
//                 )) : <div>Данные грузятся...</div>}
//         </Container>
//         <More>Еще</More>
//         </Wrapper>
//     );
// };
// export default Arrivals;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router'
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardItem from './Card'


const Container = styled.div`
    padding: 22px 99px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #393939;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 8px 8px 0;
`
const Image = styled.img`
    width: 286px;
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
const Color = styled.p` 
`
const Collection = styled.h2`
    font-weight: 500;
    font-size: 24px;
    
`
const More = styled.button`
    color: white;
    background: black;
    border: none;
    padding: 8px 38px;
    margin-top: 16px;
    cursor: pointer;
`
const Wrapper = styled.div `
    margin: 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Triangle = styled.div`
    position: absolute;
    display: inline-block;
    z-index: 10;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 0;
    border-color: #E5271B transparent transparent transparent;
`
const Sale = styled.p`
    z-index: 99;
    position: absolute;
    padding-top: 9px;
    offset-rotate: 19px;
    font-size: 12px;
    color: white;
    transform: rotate(318deg);
    font-weight: 500;
}
`
const NavItem = styled(NavLink)`
    text-decoration:none;
    &:visited,&:link {
    color: #393939;
}`


const Arrivals = () => {    
    const [data, setData] = useState([]);
    const params = useParams()

    const getClassic = async () => {
        const fetchData = await fetch('https://623c659f8e9af58789508891.mockapi.io/storage/3')
        const jsonData = await fetchData.json()
        setData(jsonData)
    }
    
    useEffect(() => {
        getClassic()
    }, [])
    
    return (
        <Wrapper>
            <Collection>Новинки</Collection>
            <Container> 
                {(data && data.data) ? data.data.slice(0, 4).map(item=>(
                    <CardItem item={item} key={item.id}/>
                //     <NavItem style={{textDecoration:'none'}} to={`/collection/2/product/`+item.id}>
                //         {/* <Card key={item.id}>
                //         <Triangle>
                //         </Triangle>
                //         <Sale>{item.sale}%</Sale>
                //         <Image src={item.image} alt="" />
                //         <CardInfo>
                //             <Title>{item.title}</Title>
                //             <Price>{item.price} p</Price>
                //             <Size>Размер: {item.size}</Size>
                //             <div style={{display:'flex'}}> 
                //             {item.color.map(color => (
                //                 <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'10px'}}></div>
                //             ))}
                //             </div>
                //         </CardInfo>
                //     </Card>    */}
                //      <Card key={item.id}>
                //         <Swiper
                //          id='swiper'   
                //          modules={[Scrollbar, A11y, Autoplay]}
                //          spaceBetween={50}
                //          autoplay={true}
                //          scrollbar={{ draggable: true }}
                //        >
                //     {item.image.map(img=>( 
                //          <SwiperSlid key={img.id}>
                //              <Triangle>
                //              </Triangle>
                //              <Sale>{item.sale}%</Sale>
                //              <Image src={img} alt="" />
                //              </SwiperSlid
                //     ))}
                //       </Swiper>
                //     <CardInfo>
                //         <Title>{item.title}</Title>
                //         <Price><span style={{color:'#979797', textDecoration:'line-through', paddingRight:'3px'}}>{item.oldPrice} p</span>{item.price}  p</Price>
                //         <Size>Размер: {item.size}</Size>
                //         <div style={{display:'flex'}}> 
                //             {item.color.map(color => (
                //                 <div style={{backgroundColor: color, height:"8px", width:'8px', borderRadius:'50%', marginRight:'10px'}}></div>
                //         ))}
                //         </div>   
                //     </CardInfo>
                // </Card>   
                //     </NavItem> 
                )) : <div>Данные грузятся...</div>}
        </Container>
        <More>Еще</More>
        </Wrapper>
    );
};

export default Arrivals;