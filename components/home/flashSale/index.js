import CountDown from '../../countdown';
import styles from './styles.module.scss';
import { MdFlashOn } from 'react-icons/md';
import { IoMdArrowDropright } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { flashSaleItems } from '../../../data/data.js';
import Card from './card';

function FlashSale() {
	return (
		<div className={styles.flashSale}>
			<div className={styles.flashSale__header}>
				<h2>
					FLASH SALE
					<MdFlashOn />
				</h2>
				<CountDown />
			</div>
			<div className={styles.main}>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					navigation={true}
					breakpoints={{
						1150: {
							slidesPerView: 5,
						},
						900: {
							slidesPerView: 4,
						},
						700: {
							slidesPerView: 3,
						},
						450: {
							slidesPerView: 2,
						},
						250: {
							slidesPerView: 1,
						},
					}}
					modules={[Navigation]}
					className='flashSaleSwiper'>
					{flashSaleItems.map((item, i) => (
						<SwiperSlide>
							<Card
								data={item}
								key={i}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.viewBtn}>
					<span>
						view more <IoMdArrowDropright />
					</span>
				</div>
			</div>
		</div>
	);
}

export default FlashSale;
