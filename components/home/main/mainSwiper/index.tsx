import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation} from 'swiper';
import {JSX, ReactNode} from "react";

export default function MainSwiper(): JSX.Element {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mainSwiper'>
                {[...Array(6).keys()].map((i: number) => (
                    <SwiperSlide key={i}>
                        <img
                            src={`/images/slider/slide ${i + 1}.jpg`}
                            alt='products'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
