import styles from '../styles.module.scss';

const Brands = () => {
	return (
		<div className={styles.brands}>
			{[...Array(6).keys()].map((i) => (
				<img
					src={`/images/brands/${i + 1}.png`}
					alt='products'
				/>
			))}
		</div>
	);
};

export default Brands;
