import Link from 'next/link';
import styles from './styles.module.scss';
import { MdFlashOn } from 'react-icons/md';
import { useState } from 'react';

function Card({ data }) {
	const [active, setActive] = useState(0);
	const newPrice = Math.round(
		data.subProducts[active].sizes[active].price -
			data.subProducts[active].sizes[active].price /
				data.subProducts[active].discount,
		2,
	);
	return (
		<div className={styles.card}>
			<div className={styles.card__img}>
				<Link href={`/product/${data.slug}?style=${active}`}>
					<img
						src={data.subProducts[active].images[0].url}
						alt=''
					/>
				</Link>
				<div className={styles.flash}>
					<MdFlashOn />
					<span>-{data.subProducts[active].discount}%</span>
				</div>
			</div>
			<div className={styles.card__priceSold}>
				<div className={styles.price}>
					<span>{newPrice}$</span>
					<span>{data.subProducts[active].sizes[active].price}$</span>
				</div>
				<div className={styles.percentage}>60%</div>
			</div>
			<div className={styles.card__sold}>
				<div className={styles.card__sold_inner}></div>
			</div>
		</div>
	);
}

export default Card;
