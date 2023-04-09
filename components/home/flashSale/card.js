import Link from 'next/link';
import styles from './styles.module.scss';
import { MdFlashOn } from 'react-icons/md';

function Card({ data }) {
	const newPrice = Math.round(data.price - data.price / data.discount, 2);
	return (
		<div className={styles.card}>
			<div className={styles.card__img}>
				<Link href={data.link}>
					<img
						src={data.image}
						alt=''
					/>
				</Link>
				<div className={styles.flash}>
					<MdFlashOn />
					<span>-{data.discount}%</span>
				</div>
			</div>
			<div className={styles.card__priceSold}>
				<div className={styles.price}>
					<span>{newPrice}$</span>
					<span>{data.price}$</span>
				</div>
				<div className={styles.percentage}>{data.sold}%</div>
			</div>
			<div className={styles.card__sold}>
				<div className={styles.card__sold_inner}></div>
			</div>
		</div>
	);
}

export default Card;
