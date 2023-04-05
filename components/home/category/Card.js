import Link from 'next/link';
import styles from './styles.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

function Card({ detail }) {
	return (
		<div className={styles.card}>
			<span>{detail.name}</span>
			<div className={styles.card__product}>
				{detail.images.map((i) => (
					<img src={i.image} />
				))}
			</div>
			<Link
				href={'/'}
				className={styles.card__viewBtn}>
				view all
				<IoIosArrowForward />
			</Link>
		</div>
	);
}

export default Card;
