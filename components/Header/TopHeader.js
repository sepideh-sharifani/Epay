import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import UserMenu from './UserMenu';

const TopHeader = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [visible, setVisible] = useState(false);
	const menuRef = useRef();

	useEffect(() => {
		const closeMenu = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setVisible(false);
			}
		};
		document.addEventListener('mousedown', closeMenu);
		return () => document.removeEventListener('mousedown', closeMenu);
	}, []);

	return (
		<div className={styles.top}>
			<div className={styles.top_container}>
				<div>
					<Link
						href='/'
						className={styles.logo}>
						<img src={'/images/Epay_Logo.png'} />
					</Link>
				</div>
				<ul className={styles.top_list}>
					<li className={styles.li}>
						<img
							src={'/images/flag.png'}
							alt='flag'
						/>
						<span>USA/ usd</span>
					</li>
					<li className={styles.li}>
						<MdSecurity />
						<span>buyer protection</span>
					</li>
					<li className={styles.li}>
						<span>Customer Service</span>
					</li>
					<li className={styles.li}>
						<span>Help</span>
					</li>
					<li
						className={styles.li}
						ref={menuRef}
						onClick={(e) => setVisible(!visible)}>
						{loggedIn ? (
							<li className={styles.li}>
								<div className={styles.flex}>
									<img
										alt='user'
										src='https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg'
									/>
									<span>Sepideh</span>
									<RiArrowDropDownFill />
								</div>
							</li>
						) : (
							<li className={styles.li}>
								<div className={styles.flex}>
									<RiAccountPinCircleLine />
									<span>Account</span>
									<RiArrowDropDownFill />
								</div>
							</li>
						)}
						{visible && <UserMenu loggedIn={loggedIn} />}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopHeader;
