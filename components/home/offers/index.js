import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { offersArray } from './data';
import useMediaQuery from '../../../hooks/useMediaQuery';

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';

export default function Offers() {
	const mediaQuery = useMediaQuery('(min-width:500px)');
	return (
		<>
			{mediaQuery ? (
				<Swiper
					slidesPerView={4}
					spaceBetween={22}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[FreeMode, Pagination, Navigation]}
					className='offersSwiper'>
					{offersArray.map((item) => (
						<SwiperSlide>
							<img
								src={item.image}
								alt='offers'
							/>
							<span>{item.price}$</span>
							<span>-{item.discount}%</span>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<Swiper
					slidesPerView={2}
					spaceBetween={22}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[FreeMode, Pagination, Navigation]}
					className='offersSwiper'>
					{offersArray.map((item) => (
						<SwiperSlide>
							<img
								src={item.image}
								alt='offers'
							/>
							<span>{item.price}$</span>
							<span>-{item.discount}%</span>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	);
}
