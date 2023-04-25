import { Rating } from '@mui/material';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { BsHandbagFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import Details from './Details';
import db from '../../../utils/db';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from '../../../store/cartSlice';
function Infos({ product }) {
	const router = useRouter();
	const [sizee, setSizee] = useState(router.query.size);
	const [qty, setQty] = useState(0);
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => ({ ...state }));
	useEffect(() => {
		setSizee('');
		setQty(0);
	}, [router.query.style]);
	useEffect(() => {
		if (qty > product.quantity) {
			setQty(product.quantity);
		}
	}, [router.query.size]);
	const addToCartHandler = async () => {
		//make sure that the data exsits
		if (!router.query.size) {
			setError('please select a size');
			return;
		}
		const { data } = await axios.get(
			`/api/product/${product._id}?style=${product.style}&size=${router.query.size}`,
		);
		if (qty > data.quantity) {
			setError(
				'The Quantity you have chosen is more than in stock. try and lower the quantity',
			);
		} else if (data.quantity < 1) {
			setError('This Product is out of stock');
		} else {
			// in order to make a unique id for each product with its own size and style
			let _uid = `${data._id}_${product.style}_${router.query.size}`;
			let exist = cart.cartItems.find((p) => p._uid === _uid);
			if (exist) {
				let newCart = cart.cartItems.map((p) => {
					if (p._uid === exist._uid) {
						return { ...p, qty: qty };
					}
					return p;
				});
				dispatch(updateCart(newCart));
			} else {
				dispatch(addToCart({ ...data, qty, size: data.size, _uid }));
			}
		}
	};
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
						onClick={() => addToCartHandler()}
						disabled={product.quantity < 1}
						style={{
							cursor: `${product.quantity < 1 ? 'not-allowed' : 'pointer'}`,
						}}>
						<BsHandbagFill />
						Add to cart
					</button>
					<button className={styles.wishListBtn}>
						<BsHeartFill />
						wishlist
					</button>
					{error && <span className={styles.error}>{error}</span>}
				</div>
				<Details details={[product.description, ...product.details]} />
			</div>
		</div>
	);
}

export default Infos;
