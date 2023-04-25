import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmptyCart from '../components/cart/emptyCart';
import SearchBar from '../components/searchBar/SearchBar';
import CartProduct from '../components/cart/product';
import styles from '../styles/cart.module.scss';
import CartHeader from '../components/cart/Header';
import CheckOut from '../components/cart/checkOut';
import { useEffect, useState } from 'react';

function cart() {
	const { cart } = useSelector((state) => ({ ...state }));
	const [selected, setSelected] = useState([]);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		setTotal(selected.reduce((a, c) => a + c.price * c.qty, 0));
	}, [selected]);
	return (
		<div>
			<Header />
			<SearchBar />
			<div className={styles.cart}>
				{cart.cartItems.length > 0 ? (
					<div className={styles.cart__container}>
						<CartHeader
							cartItems={cart.cartItems}
							selected={selected}
							setSelected={setSelected}
						/>
						<div className={styles.cart__products}>
							{cart.cartItems.map((product) => (
								<CartProduct
									product={product}
									key={product._uid}
									selected={selected}
									setSelected={setSelected}
								/>
							))}
						</div>
						<CheckOut
							total={total}
							selected={selected}
						/>
					</div>
				) : (
					<EmptyCart />
				)}
			</div>
			<Footer />
		</div>
	);
}

export default cart;
