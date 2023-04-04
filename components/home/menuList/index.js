import Link from 'next/link';
import styles from '../styles.module.scss';
import { menuItem } from './data.js';

function MenuList() {
	return (
		<div className={styles.menu}>
			{menuItem.map((item) => (
				<>
					<Link
						className={styles.menu__links}
						href={item.link}>
						<span className={styles.menu__icons}>{item.icon}</span>
						<span className={styles.menu__items}>{item.name}</span>
					</Link>
					<div className={styles.menu__itemsBorder} />
				</>
			))}
		</div>
	);
}

export default MenuList;
