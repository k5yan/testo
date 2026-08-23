type Time = string;
type Date = string;

const normalize = (val: string, expectedLength: number): string => {
	if (val.length < expectedLength) {
		return `0${val}`;
	} else return val;
};

export const getDateAndTimeFromIso = ({ iso, utc = true }: { iso: string; utc?: boolean }): [Date, Time] => {
	if (iso.length === 0) return ['', ''];

	const isoDate = new Date(iso);

	const day = normalize(`${isoDate.getDate()}`, 2);
	const month = normalize(`${isoDate.getMonth() + 1}`, 2);

	const hours = normalize(`${isoDate.getHours()}`, 2);
	const minutes = normalize(`${isoDate.getMinutes()}`, 2);

	const date: string = `${day}.${month}.${isoDate.getFullYear()}`;
	const time: string = `${hours}:${minutes}`;

	return [date, time];
};
