import { BsHeart } from 'react-icons/bs';
import product from '../../../pages/product/[slug]';
import styles from './styles.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../../store/cartSlice';
import CartHeader from '../Header';
import { useEffect, useState } from 'react';

function CartProduct({ product, selected, setSelected }) {
	const { cart } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();

	const updateQuantity = (type) => {
		let newCart = cart.cartItems.map((p) => {
			if (p._uid == product._uid) {
				return {
					...p,
					qty: type == 'plus' ? product.qty + 1 : product.qty - 1,
				};
			}
			return p;
		});
		dispatch(updateCart(newCart));
	};

	const removeProduct = (id) => {
		let newCart = cart.cartItems.filter((product) => {
			return product._uid != id;
		});
		dispatch(updateCart(newCart));
	};

	const [active, setActive] = useState();
	useEffect(() => {
		const check = selected.find((p) => p._uid == product._uid);
		setActive(check);
	}, [selected]);

	const handleSelect = () => {
		if (active) {
			setSelected(selected.filter((p) => p._uid !== product._uid));
		} else {
			setSelected([...selected, product]);
		}
	};

	return (
		<div className={`${styles.card} ${styles.product}`}>
			{product.quantity < 1 && <div className={styles.blur}></div>}
			<div className={styles.product__header} />
			<div className={styles.product__image}>
				<div
					className={`${styles.checkbox} ${active ? styles.active : ''}`}
					onClick={() => handleSelect()}></div>
				<img
					src={product.images[0].url}
					alt='product image'
				/>
				<div className={styles.col}>
					<div className={styles.grid}>
						<h1>
							{product.name.length > 30
								? `${product.name.substring(0, 30)}`
								: product.name}
						</h1>
						<div style={{ zIndex: '2' }}>
							<BsHeart />
						</div>
						<div
							style={{ zIndex: '2' }}
							onClick={() => removeProduct(product._uid)}>
							<AiOutlineDelete />
						</div>
					</div>
					<div className={styles.product__style}>
						<div
							className={styles.product__style_color}
							style={{ backgroundColor: `${product.color.color}` }}
						/>
						{product.size && <span>{product.size}</span>}
						{product.price && <span>{product.price.toFixed(2)}$</span>}
						<MdOutlineKeyboardArrowRight />
					</div>
					<div className={styles.product__priceQty}>
						<div className={styles.product__priceQty_price}>
							<span>{(product.price * product.qty).toFixed(2)}$</span>
							{product.price !== product.priceBefore && (
								<span className={styles.priceBefore}>
									{product.priceBefore}$
								</span>
							)}
							{product.discount > 0 && (
								<span className={styles.discount}>-{product.discount}%</span>
							)}
						</div>
						<div className={styles.product__priceQty_qty}>
							<button
								disabled={product.qty < 2}
								onClick={() => updateQuantity('minus')}>
								-
							</button>
							<span>{product.qty}</span>
							<button
								disabled={product.qty == product.quantity}
								onClick={() => updateQuantity('plus')}>
								+
							</button>
						</div>
						{product.quantity < 1 && (
							<div className={styles.notAvailable}>
								This product is out of stock, Add to your wishlist
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartProduct;
