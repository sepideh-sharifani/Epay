import styles from './styles.module.scss';
import { productCategory } from '../../../data/data.js';
import Card from './Card.js';

function ProductCategory() {
	return (
		<div className={styles.category}>
			{productCategory.map((item, i) => (
				<Card
					detail={item}
					key={i}
				/>
			))}
		</div>
	);
}

export default ProductCategory;
