import Ad from './Ad';
import styles from './styles.module.scss';
import TopHeader from './TopHeader';

const Header = () => {
	return (
		<header className={styles.header}>
			<Ad />
			<TopHeader />
		</header>
	);
};

export default Header;
