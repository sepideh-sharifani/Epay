import Link from 'next/link';
import styles from './styles.module.scss';
import { MdPlayArrow } from 'react-icons/md';
import { useSession } from 'next-auth/react';

function EmptyCart() {
	const { data: session } = useSession();
	return (
		<div className={styles.cart}>
			<div className={styles.cart__container}>
				<div className={styles.cart__logo}>
					<Link href='/'>
						<img
							src='/images/cart.jpg'
							alt='empty cart'
						/>
					</Link>
				</div>
				<div className={styles.cart__text}>
					<span>Cart is empty!</span>
					{session ? (
						<Link href='/browse'>
							Continue shopping
							<MdPlayArrow />
						</Link>
					) : (
						<Link href='/signin'>
							<button>Sign In/ Log In</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default EmptyCart;
