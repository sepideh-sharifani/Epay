import styles from './styles.module.scss';
function CountDown() {
	return (
		<div className={styles.countDown}>
			<span>1</span>
			<span>1</span>
			<b>:</b>
			<span>1</span>
			<span>1</span>
			<b>:</b>
			<span>1</span>
			<span>1</span>
		</div>
	);
}

export default CountDown;
