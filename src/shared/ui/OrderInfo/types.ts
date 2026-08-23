import type { COLORS } from '../../constants/theme';

export interface Order {
	order_num: string;
	dateStart: string;
	dateEnd: string;
	company: string;
	partner: string;
	delivery_num: string;
	quantity: number;
	status: {
		id: string;
		text: string;
		color: keyof typeof COLORS;
	};
	sum: string;
	comment: string;
}
