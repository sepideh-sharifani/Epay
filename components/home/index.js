import styles from './styles.module.scss';
import MainSwiper from './mainSwiper';
import Offers from './offers';
import Brands from './brands';
import MenuList from './menuList';
import MostWanted from './mostWanted';

const Main = () => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<Brands />
			</div>
			<div className={styles.menu}>
				<MenuList />
			</div>
			<div className={styles.mainSwiper}>
				<MainSwiper />
			</div>
			<div className={styles.offers}>
				<Offers />
			</div>
			<div className={styles.wanted}>
				<MostWanted />
			</div>
		</div>
	);
};

export default Main;
