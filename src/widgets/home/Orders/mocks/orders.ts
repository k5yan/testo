import type { Order } from '../../../../shared/ui/OrderInfo/types';

export const ordersMock: Array<Order> = [
	{
		order_num: '00001',
		dateStart: '2024-01-01T12:40:00+03:00',
		dateEnd: '2024-07-27T12:00:00+03:00',
		company: 'ИП Иванов Иван Иванович',
		partner: 'ООО “Название компании”',
		delivery_num: '123123123123123',
		quantity: 1,
		status: {
			id: '1',
			text: 'Принят без расхождений',
			color: 'SUCCESS',
		},
		sum: '100 000,00',
		comment: 'Первый заказ для МП',
	},
	{
		order_num: '00002',
		dateStart: '2024-01-01T12:40:00+03:00',
		dateEnd: '2024-07-27T12:00:00+03:00',
		company: 'ИП Иванов Иван Иванович',
		partner: 'ООО “Название компании”',
		delivery_num: '123123123123123',
		quantity: 1,
		status: {
			id: '0',
			text: 'Не зарезервирован',
			color: 'ERROR',
		},
		sum: '100 000,00',
		comment: 'Первый заказ для МП',
	},
];
