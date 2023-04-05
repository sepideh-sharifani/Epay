import styles from './styles.module.scss';

function Card({ data }) {
	return (
		<div className={styles.bannerCards}>
			<div className={styles.details}>
				<h2>{data.title}</h2>
				<h4>{data.description}</h4>
				<h6>{data.description2}</h6>
				<button>Shop now</button>
			</div>
			<img
				src={data.image}
				alt='img'
			/>
		</div>
	);
}

export default Card;
