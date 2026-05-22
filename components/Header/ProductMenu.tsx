import Link from 'next/link';
import styles from './styles.module.scss';
import {menuItem, MenuItemTypes} from '../../data/data.js';

function ProductMenu() {
    return (
        <div className={styles.menuList}>
            <div className={styles.menu}>
                {menuItem.map((item: MenuItemTypes, index: number) => (
                    <div key={index}>
                        <Link
                            className={styles.menu__links}
                            href={item.link || "#"}>
                            <span className={styles.menu__icons}>{item.icon}</span>
                            <span className={styles.menu__items}>{item.name}</span>
                        </Link>
                        <div className={styles.menu__itemsBorder}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductMenu;
