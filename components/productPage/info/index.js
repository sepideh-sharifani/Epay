import { Rating } from '@mui/material';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { BsHandbagFill } from 'react-icons/bs';
import Details from './Details';
function Infos({ product }) {
	const router = useRouter();
	const [sizee, setSizee] = useState(router.query.size);
	const [qty, setQty] = useState(0);
	useEffect(() => {
		setSizee('');
		setQty(0);
	}, [router.query.style]);
	useEffect(() => {
		if (qty > product.quantity) {
			setQty(product.quantity);
		}
	}, [router.query.size]);
	return (
		<div className={styles.infos}>
			<div className={styles.infos__container}>
				<h1 className={styles.infos__name}>{product.name}</h1>
				<h2 className={styles.infos__sku}>{product.sku}</h2>
				<div className={styles.infos__rating}>
					<Rating
						name='half-rating-read'
						defaultValue={product.rating}
						precision={0.5}
						readOnly
						style={{ color: '#eab14b' }}
					/>
					{product.numReviews} {product.numReviews == 1 ? 'review' : 'reviews'}
				</div>
				<div className={styles.infos__price}>
					{!sizee ? <h2>{product.priceRange}</h2> : <h2>{product.price}</h2>}

					{product.discount > 0 && (
						<h3>
							{sizee && (
								<>
									<span>{product.priceBefore}</span>
									<span>(-{product.discount}%)</span>
								</>
							)}
						</h3>
					)}
				</div>
				<span>
					{sizee
						? product.quantity
						: product.sizes.reduce((item, b) => item + b.qty, 0)}{' '}
					peices available
				</span>
				<div className={styles.infos__sizes}>
					<h4>Select a size:</h4>
					<div className={styles.infos__sizes_wrap}>
						{product.sizes.map((size, i) => (
							<Link
								key={i}
								href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
								onClick={() => setSizee(size.size)}>
								<div
									className={`${styles.infos__sizes_size} ${
										i == router.query.size && styles.activeSize
									}`}>
									{size.size}
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.infos__colors}>
					<h4>Select a color:</h4>
					{product.colors &&
						product.colors.map((item, i) => (
							<span className={i == router.query.style && styles.activeColor}>
								<Link href={`/product/${product.slug}?style=${i}`}>
									<div
										className={styles.infos__colors_map}
										style={{ backgroundColor: `${item.color}` }}
									/>
								</Link>
							</span>
						))}
				</div>
				<div className={styles.infos__qty}>
					<button onClick={() => qty > 0 && setQty((prev) => prev - 1)}>
						<TbMinus />
					</button>
					<span>{qty}</span>
					<button
						onClick={() =>
							qty < product.quantity && setQty((prev) => prev + 1)
						}>
						<TbPlus />
					</button>
				</div>
				<div className={styles.infos__actions}>
					<button
						className={styles.cartBtn}
						disabled={product.quantity < 1}
						style={{
							cursor: `${product.quantity < 1 ? 'not-allowed' : 'pointer'}`,
						}}>
						<BsHandbagFill />
						Add to cart
					</button>
					{/* <button className={styles.wishListBtn}>wishlist</button> */}
				</div>
				<Details details={[product.description, ...product.details]} />
			</div>
		</div>
	);
}

export default Infos;
