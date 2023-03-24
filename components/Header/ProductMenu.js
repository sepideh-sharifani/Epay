import Link from 'next/link';
import styles from './styles.module.scss';

function ProductMenu() {
	return (
		<div className={styles.menuList}>
			<ul className={styles.productList}>
				<li>
					<Link href='/profile'>Account</Link>
				</li>
				<li>
					<Link href='/profile/orders'> My Orders</Link>
				</li>
				<li>
					<Link href='/profile/messeges'> messege Center</Link>
				</li>
				<li>
					<Link href='/profile/address'>Addresses</Link>
				</li>
				<li>
					<Link href='/profile/wishList'>WishList</Link>
				</li>
			</ul>
		</div>
	);
}

export default ProductMenu;
