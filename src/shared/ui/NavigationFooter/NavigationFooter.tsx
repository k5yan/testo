import type React from 'react';
import type { NavigationFooterProps } from './types';
import { Button } from '../Button';
import { COLORS } from '../../constants/theme';
import { Label } from '../Label';
import { Icon } from '../Icon';

export const NavigationFooter: React.FC<NavigationFooterProps> = ({ currentPage, numberOfPages }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
			<Button
				icon={{
					name: 'arrowDown',
				}}
				color={COLORS.WHITE}
				extraStyles={{
					transform: 'rotate(90deg)',
				}}
				paddingHorizontal={0}
				paddingVertical={0}
			/>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				{Array.from({ length: 5 }).map((_, index) => {
					const isSelectedPageTab: boolean = index + 1 === currentPage;
					return (
						<Button
							label={{
								text: `${index + 1}`,
								size: 14,
								weight: 'regular',
								color: isSelectedPageTab ? COLORS.WHITE : COLORS.BLACK,
							}}
							paddingHorizontal={0}
							paddingVertical={0}
							buttonStyle={isSelectedPageTab ? 'filled' : 'bordered'}
							color={isSelectedPageTab ? COLORS.PRIMARY : COLORS.GRAY_LIGHT}
							extraStyles={{
								height: 38,
								aspectRatio: 1,
							}}
						/>
					);
				})}
			</div>
			<Button
				icon={{
					name: 'arrowDown',
				}}
				color={COLORS.WHITE}
				extraStyles={{
					transform: 'rotate(-90deg)',
				}}
				paddingHorizontal={0}
				paddingVertical={0}
			/>
			<Label text={'Строк на странице'} size={14} weight={'regular'} color={COLORS.BLACK} />
			<Button
				buttonStyle={'bordered'}
				color={COLORS.GRAY_LIGHT}
				label={{
					text: `${numberOfPages}`,
					size: 14,
					weight: 'regular',
					color: COLORS.BLACK,
				}}
				accessoryRight={<Icon name={'arrowDown'} width={12} height={12} />}
				paddingHorizontal={20}
				paddingVertical={13}
			/>
		</div>
	);
};
