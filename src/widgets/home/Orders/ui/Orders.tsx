import type React from 'react';
import type { OrdersProps } from './types';
import { ordersMock } from '../mocks/orders';
import { useMemo } from 'react';
import { OrderInfo } from '../../../../shared/ui/OrderInfo';
import { Button, Icon } from '../../../../shared/ui';
import { COLORS } from '../../../../shared/constants/theme';
import styles from './Orders.module.scss';

const filters: Array<string> = [
	'№',
	'ДАТА',
	'ОРГАНИЗАЦИЯ',
	'КОНТРАГЕНТ',
	'№ ПОСТАВКИ',
	'КОЛ-ВО',
	'СТАТУС',
	'ДАТА-ПРИЕМКИ',
	'СУММА',
	'КОММЕНТАРИЙ',
];

export const Orders: React.FC<OrdersProps> = ({ orders = ordersMock }) => {
	const companyOrders = useMemo(() => {
		return orders.map((order) => <OrderInfo key={order.order_num} {...order} />);
	}, [orders]);

	const columns = filters.map((title, index) => (
		<Button
			key={title}
			label={{
				text: title,
				size: 12,
				weight: 'regular',
				color: COLORS.GRAY,
			}}
			accessoryRight={
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Icon name={'sort'} size={'secondary'} />
					{index < filters.length - 1 ? (
						<div
							style={{
								height: 40,
								width: 1,
								backgroundColor: COLORS.GRAY_LIGHT,
								margin: '0 2px 0 12px',
							}}
						/>
					) : (
						<div style={{ width: 25 }} />
					)}
				</div>
			}
			paddingHorizontal={10}
			paddingVertical={10}
			borderRadius={0}
			extraStyles={{
				backgroundColor: COLORS.BLUE_LIGHT,
				gap: 10,
				padding: '10px 0 10px 10px',
				height: 60,
				display: 'flex',
				justifyContent: 'space-between',
				borderWidth: 0,
				borderBottomWidth: 1,
				borderRightWidth: index === filters.length - 1 ? 1 : 0,
				borderColor: COLORS.GRAY_LIGHT,
			}}
		/>
	));

	return (
		<div className={styles.container}>
			{columns}
			{companyOrders}
		</div>
	);
};
