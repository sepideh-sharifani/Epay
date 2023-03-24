import Links from './Links';
import NewsLetter from './NewsLetter';
import styles from './styles.module.scss';
function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<NewsLetter />
				<Links />
			</div>
		</footer>
	);
}

export default Footer;
