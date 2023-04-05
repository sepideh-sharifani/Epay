import styles from './styles.module.scss';
import { bannerData } from '../../../data/data.js';
import Card from './Card';

function Banner() {
	return (
		<div className={styles.banner}>
			{bannerData.map((item, i) => (
				<Card
					key={i}
					data={item}
				/>
			))}
		</div>
	);
}

export default Banner;
