import styles from './styles.module.scss';

function NewsLetter() {
	return (
		<div className={styles.newsLetter}>
			<div className={styles.text}>
				<h3>Join our NewsLetter </h3>
				<h6>
					Get Email Updates about our latest <span>products and offers</span>
				</h6>
			</div>
			<div className={styles.input}>
				<input
					type='text'
					placeholder='Your Email Address'
				/>
				<button className={styles.button}>Join</button>
			</div>
		</div>
	);
}

export default NewsLetter;
