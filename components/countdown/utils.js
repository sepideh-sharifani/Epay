//here Dayjs is used in order to do the calculations
import dayjs from 'dayjs';

export function calculateRemaining(timeInMs) {
	const timeStampDayJs = dayjs(timeInMs);
	//the current day
	const nowDayjs = dayjs();

	if (timeStampDayJs.isBefore(nowDayjs)) {
		return {
			seconds: '00',
			minutes: '00',
			hours: '00',
			days: '00',
		};
	} else {
		return {
			seconds: getRemainingSeconds(nowDayjs, timeStampDayJs),
			minutes: getRemainingMinutes(nowDayjs, timeStampDayJs),
			hours: getRemainingHours(nowDayjs, timeStampDayJs),
			days: getRemainingDays(nowDayjs, timeStampDayJs),
		};
	}
}

function getRemainingSeconds(nowDayjs, timeStampDayJs) {
	const seconds = timeStampDayJs.diff(nowDayjs, 'seconds') % 60;
	return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timeStampDayJs) {
	const minutes = timeStampDayJs.diff(nowDayjs, 'minutes') % 60;
	return padWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timeStampDayJs) {
	const hours = timeStampDayJs.diff(nowDayjs, 'hours') % 60;
	return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timeStampDayJs) {
	const days = timeStampDayJs.diff(nowDayjs, 'days');
	return days.toString();
}

function padWithZeros(number, length) {
	const numberString = number.toString();
	if (numberString.length >= length) return numberString;
	return '0'.repeat(length - numberString.length) + numberString;
}
