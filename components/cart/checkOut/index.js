import styles from './styles.module.scss';

function CheckOut({ total, selected }) {
	return (
		<div className={`${styles.cart__checkout} ${styles.card}`}>
			<h2>Order Summary</h2>
			<div className={styles.cart__checkout_products}>
				{selected.map((item) => (
					<>
						<div className={styles.productPrice}>
							<div
								className={styles.productColor}
								style={{ backgroundColor: `${item.color.color}` }}
							/>
							<span>
								{item.name.length > 10
									? `${item.name.substring(0, 10)}...`
									: item.name}{' '}
							</span>
							<span style={{ color: `${item.color.color}` }}>
								{(item.price * item.qty).toFixed(2)}$
							</span>
						</div>
					</>
				))}
			</div>
			<div className={styles.cart__checkout_line}>
				<span>total</span>
				<span>{total.toFixed(2)}$</span>
			</div>
			<div className={styles.submit}>
				<button
					disabled={selected.length == 0}
					style={{
						background: `${selected.length == 0 ? '#6a6767' : ''}`,
						cursor: `${selected.length == 0 ? 'not-allowed' : ''}`,
					}}>
					Continue
				</button>
			</div>
		</div>
	);
}

export default CheckOut;
