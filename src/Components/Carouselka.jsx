import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from 'styled-components'

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


const Banner = styled.img`
    width: 100%
`
