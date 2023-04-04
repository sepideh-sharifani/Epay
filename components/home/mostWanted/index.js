import styles from '../styles.module.scss';
function MostWanted() {
	return (
		<div className={styles.wanted}>
			<img
				src='./images/wanted.jpg'
				alt='most wanted'
			/>
			<span> MOST WANTED!</span>
			<button>Order NOW</button>
		</div>
	);
}

export default MostWanted;
