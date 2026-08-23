import React, { type CSSProperties } from 'react';
import { COLORS } from '../../constants/theme';
import { Label } from '../Label';
import type { Order } from './types';
import type { LabelProps } from '../Label/types';
import styles from './OrderInfo.module.scss';
import { getDateAndTimeFromIso } from '../../utils';

export const OrderInfo: React.FC<Order> = (order) => {
	const labelStyle: Omit<LabelProps, 'text'> = {
		size: 14,
		weight: 'regular',
		color: order.status.id !== '0' ? COLORS.BLACK : COLORS.GRAY,
	};

	const cellStyle: CSSProperties = {
		height: 50,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderStyle: 'solid',
		borderColor: COLORS.GRAY_LIGHT,
		paddingRight: 15,
		display: 'flex',
		paddingLeft: 10,
		justifyContent: 'flex-start',
		alignItems: 'center',
	};

	const dateStartTimeStamp = new Date(order.dateStart).getTime();
	const dateEndTimeStamp = new Date(order.dateEnd).getTime() || 0;
	const deliveryTime = dateEndTimeStamp - dateStartTimeStamp;
	const deliveryHours = Math.floor(deliveryTime / (1000 * 60 * 60));
	const deliveryDays = Math.floor(deliveryHours / 24);
	const deliveryExtraHours = Math.floor(deliveryHours % 24);

	const [dateStart, timeStart] = getDateAndTimeFromIso({ iso: order.dateStart });
	const [dateEnd, timeEnd] = getDateAndTimeFromIso({ iso: order.dateEnd });

	return (
		<>
			<div style={{ ...cellStyle, justifyContent: 'center' }}>
				<Label {...labelStyle} text={order.order_num} />
			</div>
			<div style={cellStyle}>
				<Label
					{...labelStyle}
					text={[dateStart, <span className={styles.dateSeparator}>{' | '}</span>, timeStart]}
				/>
			</div>
			<div style={cellStyle}>
				<Label {...labelStyle} text={order.company} />
			</div>
			<div style={cellStyle}>
				<Label {...labelStyle} text={order.partner} />
			</div>
			<div style={{ ...cellStyle, justifyContent: 'flex-end' }}>
				<Label {...labelStyle} text={order.delivery_num} />
			</div>
			<div style={{ ...cellStyle, justifyContent: 'flex-end' }}>
				<Label {...labelStyle} text={order.quantity} textAlign={'end'} />
			</div>
			<div style={{ ...cellStyle, justifyContent: 'center' }}>
				<div
					style={{
						padding: '0 10px 0 10px',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							borderRadius: 6,
							padding: '5px 10px 5px 10px',
							backgroundColor: COLORS[`${order.status.color}_HOVER`],
						}}
					>
						<Label {...labelStyle} color={COLORS[order.status.color]} text={order.status.text} />
					</div>
				</div>
			</div>
			<div style={cellStyle}>
				<div>
					{dateEnd.length !== 0 && (
						<div style={{ gap: 4, textAlign: 'start', display: 'flex', flexDirection: 'column' }}>
							<Label
								{...labelStyle}
								color={COLORS.GRAY}
								text={[
									dateEnd,
									<span className={styles.dateSeparator}>{' | '}</span>,
									timeEnd,
								]}
							/>
							<Label
								{...labelStyle}
								text={`Время доставки: ${deliveryDays}д. ${deliveryExtraHours}ч.`}
							/>
						</div>
					)}
				</div>
			</div>
			<div style={{ ...cellStyle, justifyContent: 'flex-end' }}>
				<Label {...labelStyle} text={order.sum} textAlign={'end'} />
			</div>
			<div style={{ ...cellStyle, paddingRight: 20, borderRightWidth: 1 }}>
				<Label {...labelStyle} text={order.comment} textAlign={'start'} />
			</div>
		</>
	);
};
