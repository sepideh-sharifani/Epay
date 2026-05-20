import Link from 'next/link';
import styles from './styles.module.scss';

function UserMenu({ loggedIn }) {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<h4>Welcome to Epay</h4>
				<span className={styles.line} />
				{/*{session ? (*/}
				{/*	<>*/}
				{/*		<div className={styles.flex}>*/}
				{/*			<img*/}
				{/*				src={session.user.image}*/}
				{/*				alt='image'*/}
				{/*				className={styles.menu_img}*/}
				{/*			/>*/}
				{/*			<div className={styles.col}>*/}
				{/*				<span>Welcome Back!</span>*/}
				{/*				<h3>{session.user.name}</h3>*/}
				{/*				<span onClick={signOut}>sign out</span>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*		<ul>*/}
				{/*			<li>*/}
				{/*				<Link href='/profile'>Account</Link>*/}
				{/*			</li>*/}
				{/*			<li>*/}
				{/*				<Link href='/profile/orders'> My Orders</Link>*/}
				{/*			</li>*/}
				{/*			<li>*/}
				{/*				<Link href='/profile/messeges'> messege Center</Link>*/}
				{/*			</li>*/}
				{/*			<li>*/}
				{/*				<Link href='/profile/address'>Addresses</Link>*/}
				{/*			</li>*/}
				{/*			<li>*/}
				{/*				<Link href='/profile/wishList'>WishList</Link>*/}
				{/*			</li>*/}
				{/*		</ul>*/}
				{/*	</>*/}
				{/*) : (*/}
				{/*	<div className={styles.flex}>*/}
				{/*		/!*<Link href='/signup'>*!/*/}
				{/*		/!*	<button>Register</button>*!/*/}
				{/*		/!*</Link>*!/*/}
				{/*		/!*<button onClick={signIn}>Login</button>*!/*/}
				{/*	</div>*/}
				{/*)}*/}
			</div>
		</div>
	);
}

export default UserMenu;
