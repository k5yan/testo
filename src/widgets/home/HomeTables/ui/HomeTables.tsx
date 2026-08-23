import { TableSelectors } from '../../../../shared/ui/TableSelectors/TableSelectors';
import { Orders } from '../../Orders/ui';
import { Button } from '../../../../shared/ui';
import { COLORS, SHADOW_DEFAULT } from '../../../../shared/constants/theme';
import { NavigationFooter } from '../../../../shared/ui/NavigationFooter';
import type React from 'react';
import type { HomeTablesProps } from './types';
import type { SelectorProps } from '../../../../shared/ui/Selector/types';
import styles from './HomeTables.module.scss';
import { ordersMock } from '../../Orders/mocks/orders';

export const HomeTables: React.FC<HomeTablesProps> = () => {
	const selectors: Array<SelectorProps> = [
		{
			label: { text: 'Дата' },
			value: '01.01.2025 - 31.01.2025',
		},
		{
			label: { text: 'Контрагент' },
		},
		{
			label: { text: 'Организация' },
		},
		{
			label: { text: 'Товар' },
		},
		{
			label: { text: 'Склад отправителя' },
		},
		{
			label: { text: '№ поставки' },
		},
		{
			label: { text: '№ поставки' },
		},
		{
			label: { text: 'Статус  операции' },
		},
		{
			label: { text: 'Склад получателя' },
		},
		{
			label: { text: 'Проведено' },
		},
	];

	const FilterButton = ({ text, isSelected }: { text: string; isSelected: boolean }) => {
		return (
			<Button
				label={{
					text,
					size: 12,
					weight: 'regular',
					color: isSelected ? COLORS.WHITE : COLORS.GRAY,
				}}
				paddingHorizontal={6}
				paddingVertical={0}
				extraStyles={{
					height: 32,
					width: 200,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: isSelected ? COLORS.PRIMARY : COLORS.GRAY_LIGHT,
					boxShadow: SHADOW_DEFAULT,
				}}
				borderRadius={16}
			/>
		);
	};

	return (
		<div className={styles.container}>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<Button
						label={{
							text: 'Фильтр',
							color: COLORS.WHITE,
						}}
						paddingHorizontal={20}
						paddingVertical={13}
						extraStyles={{
							minWidth: 140,
							height: 46,
						}}
					/>
					<Button
						color={COLORS.BLUE_LIGHT}
						icon={{
							name: 'bookmark',
						}}
						extraStyles={{
							height: 46,
							aspectRatio: 1,
						}}
					/>
					<Button
						color={COLORS.BLUE_LIGHT}
						icon={{
							name: 'erase',
						}}
						extraStyles={{
							height: 46,
							aspectRatio: 1,
						}}
					/>
					<Button
						color={COLORS.BLUE_LIGHT}
						icon={{
							name: 'search',
						}}
						extraStyles={{
							height: 46,
							aspectRatio: 1,
						}}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<div id="download-by-api">
						<Button
							icon={{
								name: 'download',
							}}
							label={{
								text: 'Загрузить по API',
								color: COLORS.WHITE,
							}}
							paddingHorizontal={9}
							paddingVertical={12}
							extraStyles={{
								height: 46,
								gap: 6,
							}}
						/>
					</div>
					<div id="new-order">
						<Button
							icon={{
								name: 'plus',
							}}
							label={{
								text: 'Заявка на поставку',
								color: COLORS.WHITE,
							}}
							paddingHorizontal={9}
							paddingVertical={12}
							extraStyles={{
								height: 46,
								gap: 6,
							}}
						/>
					</div>
					<Button
						buttonStyle={'bordered'}
						color={COLORS.GRAY_LIGHT}
						icon={{
							name: 'settings',
							stroke: COLORS.BLACK,
						}}
						paddingHorizontal={9}
						paddingVertical={12}
						extraStyles={{
							height: 46,
							aspectRatio: 1,
						}}
					/>
				</div>
			</div>

			<TableSelectors selectors={selectors} />

			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: 10,
				}}
			>
				<FilterButton text={'Фильтр первый'} isSelected={false} />
				<FilterButton text={'Фильтр первый'} isSelected={true} />
			</div>

			<div id={'orders-table'} style={{ display: 'flex', flex: 1, alignItems: 'flex-start' }}>
				<Orders orders={ordersMock} />
			</div>

			<NavigationFooter currentPage={1} numberOfPages={50} />
		</div>
	);
};
