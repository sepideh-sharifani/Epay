import Link from 'next/link';
import styles from './styles.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { BsCart, BsSuitHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { TbCategory } from 'react-icons/tb';

function Main() {
	const { cart } = useSelector((state) => ({ ...state }));
	return (
		<div className={styles.main}>
			<div className={styles.main__container}>
				<div className={styles.category}>
					<TbCategory />
					<span>All categories</span>
				</div>
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
