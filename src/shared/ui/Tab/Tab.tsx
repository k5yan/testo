import type React from 'react';
import type { TabProps } from './types';
import { COLORS } from '../../constants/theme';
import { Button } from '../Button';

export const Tab: React.FC<TabProps> = ({ label, onPress, id }) => {
	const handleClick = (): void => {
		onPress(id);
	};

	return (
		<Button
			onPress={handleClick}
			label={{
				text: label.text,
				size: 16,
				weight: 'bold',
				color: COLORS.GRAY,
			}}
			paddingHorizontal={10}
			paddingVertical={0}
			extraStyles={{
				borderTopLeftRadius: 9,
				borderTopRightRadius: 9,
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				height: 30,
			}}
			color={COLORS.GRAY_LIGHT}
		/>
	);
};
