import Link from 'next/link';
import styles from './styles.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { BsCart, BsSuitHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { TbCategory } from 'react-icons/tb';
import useMediaQuery from '../../hooks/useMediaQuery';
import { HiMenu } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';
import ProductMenu from './ProductMenu';

function Main() {
	const mediaQuery = useMediaQuery('(min-width:870px)');
	const [visible, setVisible] = useState(false);
	const { cart } = useSelector((state) => ({ ...state }));
	const menuRef = useRef();

	useEffect(() => {
		if (window.innerWidth < 870) {
			const closeMenu = (e) => {
				if (!menuRef.current.contains(e.target)) {
					setVisible(false);
				}
			};
			document.addEventListener('mousedown', closeMenu);
			return () => document.removeEventListener('mousedown', closeMenu);
		}
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.main__container}>
				{mediaQuery ? (
					<div className={styles.category}>
						<TbCategory />
						<span>All categories</span>
					</div>
				) : (
					<>
						<div
							className={styles.productMenu}
							ref={menuRef}>
							<HiMenu onClick={(e) => setVisible(!visible)} />
						</div>
						{visible && <ProductMenu />}
					</>
				)}

				<div className={styles.rightSide}>
					<div className={styles.search}>
						<input
							type='text'
							placeholder='search...'
						/>
						<div className={styles.search__icon}>
							<RiSearch2Line />
						</div>
					</div>
					<div className={styles.icons}>
						<Link href='/cart'>
							<div>
								<BsCart />
								<span className={styles.icons__cart}>0</span>
							</div>
						</Link>

						<Link href='/profile/wishList'>
							<div>
								<BsSuitHeart />
								<span className={styles.icons__wishlist}>0</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
