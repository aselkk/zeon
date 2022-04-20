import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from 'styled-components'

export default function Carouselka() {
    return (
        <Wrapper>
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

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >   
                <SwiperSlide> <a href='https://www.adidas.ru/' target="_blank"><Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg' /></a></SwiperSlide>
                <SwiperSlide> <a href='https://www.nike.com/' target='_blank'><Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg' /></a></SwiperSlide>
                <SwiperSlide> <a href='https://www.adidas.ru/' target="_blank"><Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg' /></a></SwiperSlide>
                <SwiperSlide> <a href='https://www.nike.com/' target='_blank'><Banner src='https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg' /></a></SwiperSlide>
            </Swiper>
            <div class="swiper-pagination"></div>
        </Wrapper>
    );
}


const Banner = styled.img`
    width: 100%
`
const Wrapper = styled.section`
    padding: 22px 99px; 
    @media screen and (max-width: 390px) 
    { 
        padding: 10px 0;
    }
`
