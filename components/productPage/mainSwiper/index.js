import { useState } from 'react';
import styles from './styles.module.scss';
import ReactImageMagnify from 'react-image-magnify';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Magnifier from 'react-magnifier';

function MainSwiper({ images, activeImage }) {
	const mediaQuery = useMediaQuery('(max-width:800px)');
	const [active, setActive] = useState(0);
	return (
		<>
			{mediaQuery ? (
				<Swiper
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='productMainSwiper'>
					{images.map((item) => (
						<SwiperSlide>
							<img
								src={item.url}
								alt='offers'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className={styles.productSwiper}>
					<div className={styles.productSwiper__active}>
						<Magnifier
							className={styles.magnifier}
							src={images[active].url}
						/>
						<h6>roll over image to see it zoomed!</h6>
					</div>
					<div className={styles.productSwiper__list}>
						{images.map((item, i) => (
							<div
								className={`${styles.productSwiper__list_item} ${
									i == active && styles.active
								}`}
								key={i}
								onMouseEnter={() => setActive(i)}>
								<img
									src={item.url}
									alt='product image'
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default MainSwiper;
