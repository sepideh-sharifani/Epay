import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function MainSwiper() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mainSwiper'>
				{[...Array(6).keys()].map((i) => (
					<SwiperSlide>
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
