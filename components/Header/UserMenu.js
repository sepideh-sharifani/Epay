import Link from 'next/link';
import styles from './styles.module.scss';

function UserMenu({ loggedIn }) {
	return (
		<div className={styles.menu}>
			<h4>Welcome to Epay</h4>
			<span className={styles.line}></span>
			{loggedIn ? (
				<div className={styles.flex}>
					<img
						src='https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg'
						alt='image'
						className={styles.menu_img}
					/>
					<div className={styles.col}>
						<span>Welcome Back!</span>
						<h3>Sepideh</h3>
						<span>sign out</span>
					</div>
				</div>
			) : (
				<div className={styles.flex}>
					<button>Register</button>
					<button>Login</button>
				</div>
			)}
			<ul>
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

export default UserMenu;
