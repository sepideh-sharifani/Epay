import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { calculateRemaining } from './utils';
const initialValue = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};
function CountDown({ date }) {
	const [timeInMs, setTimeInMs] = useState(date.getTime());
	//when the date changes, it is updated
	useEffect(() => {
		setTimeInMs(date.getTime());
	}, [date]);

	const [remainingTime, setRemainingTime] = useState();
	useEffect(() => {
		//the remaining time is computed based on seconds
		const interval = setInterval(() => {
			updateRemainingTime(timeInMs);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const updateRemainingTime = (timeInMs) => {
		setRemainingTime(calculateRemaining(timeInMs));
	};

	return (
		<div className={styles.countDown}>
			<div className={styles.days}>
				{[...Array(remainingTime?.days.length).keys()].map((day, i) => (
					<span>{remainingTime?.days.slice(i, i + 1)}</span>
				))}
				<span>days</span>
			</div>
			<div>
				<span>{remainingTime?.hours.slice(0, 1)}</span>
				<span>{remainingTime?.hours.slice(1, 2)}</span>
				<b>:</b>
				<span>{remainingTime?.minutes.slice(0, 1)}</span>
				<span>{remainingTime?.minutes.slice(1, 2)}</span>
				<b>:</b>
				<span>{remainingTime?.seconds.slice(0, 1)}</span>
				<span>{remainingTime?.seconds.slice(1, 2)}</span>
			</div>
		</div>
	);
}

export default CountDown;
