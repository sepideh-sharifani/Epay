import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useEffect, useRef } from 'react';

function ProductSwiper({ images }) {
	//to stop the images from swiping themselves
	const swiperRef = useRef(null);
	useEffect(() => {
		swiperRef.current.swiper.autoplay.stop();
	}, [swiperRef]);
	return (
		<div
			className={styles.swiper}
			onMouseEnter={() => {
				swiperRef.current.swiper.autoplay.start();
			}}
			onMouseLeave={() => {
				swiperRef.current.swiper.autoplay.stop();
				swiperRef.current.swiper.slideTo(0);
			}}>
			<Swiper
				ref={swiperRef}
				centeredSlides={true}
				autoplay={{
					delay: 500,
					stopOnLastSlide: false,
				}}
				speed={500}
				modules={[Autoplay]}>
				{images.map((item) => (
					<SwiperSlide>
						<img
							src={item.url}
							alt='product image'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default ProductSwiper;
