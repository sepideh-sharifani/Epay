import Ad from './Ad';
import Main from './Main';
import styles from './styles.module.scss';
import TopHeader from './TopHeader';

const Header = () => {
	return (
		<header className={styles.header}>
			<Ad />
			<TopHeader />
			<Main />
		</header>
	);
};

export default Header;
