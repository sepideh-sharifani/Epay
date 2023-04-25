import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

function CartHeader({ cartItems, selected, setSelected }) {
	const [active, setActive] = useState();
	useEffect(() => {
		const check = JSON.stringify(cartItems) === JSON.stringify(selected);
		setActive(check);
	}, [selected]);
	console.log(cartItems);
	const handleSelect = () => {
		if (selected.length !== cartItems.length) {
			setSelected(cartItems);
		} else {
			setSelected([]);
		}
	};
	return (
		<div className={styles.cart__header}>
			<h2>Product Summary({cartItems.length})</h2>
			<div
				className={styles.flex}
				onClick={() => handleSelect()}>
				<div className={`${styles.checkbox} ${active ? styles.active : ''}`} />
				<span>Select All</span>
			</div>
		</div>
	);
}

export default CartHeader;
