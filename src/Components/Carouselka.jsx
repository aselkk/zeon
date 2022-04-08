// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper } from '@mui/material'

// export default function Carouselka(props)
// {
//     const items = [
//         {
//             img: 'https://i.pinimg.com/originals/8b/e1/18/8be118faa8a7063ebdb2353447cb69b2.jpg'
//         },
//         {
//             img: 'https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-2-MiWPZ0F7l.jpg'
//         },
//         {
//             img: 'https://i.pinimg.com/originals/8b/e1/18/8be118faa8a7063ebdb2353447cb69b2.jpg'
//         },
//         {
//             img: 'https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-2-MiWPZ0F7l.jpg'
//         },
//         {
//             img: 'https://i.pinimg.com/originals/8b/e1/18/8be118faa8a7063ebdb2353447cb69b2.jpg'
//         },
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }   

// function Item(props)
// {
//     return (
//         <Paper style={{padding: '22px 99px',background: '#ECECEC', boxShadow: 'none'}}>
//             <img style={{width: '1248px', height: '488px'}} src={props.item.img} alt="" />
//         </Paper>
//     )
// }

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from 'styled-components'

const Banner = styled.img`
    width: 100%
`

export default function Carouselka() {
    return (
        <div style={{padding: '22px 99px'}}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >   
                <SwiperSlide> <Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg' /></SwiperSlide>
                <SwiperSlide> <Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg' /></SwiperSlide>
                <SwiperSlide> <Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg' /></SwiperSlide>
                <SwiperSlide> <Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg' /></SwiperSlide>
            </Swiper>
        </div>
    );
}
