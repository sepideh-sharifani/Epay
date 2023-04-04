import styles from './Loader.module.scss';
import CircleLoader from 'react-spinners/CircleLoader';
function SignUpLoader({ loading }) {
	return (
		<div className={styles.loader}>
			<CircleLoader
				color='#183b79'
				loading={loading}
			/>
		</div>
	);
}

export default SignUpLoader;
