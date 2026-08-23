import React from 'react';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { COLORS } from '../../constants/theme';
import type { ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({
	buttonStyle = 'filled',
	color = COLORS.PRIMARY,
	icon = null,
	label = null,
	paddingHorizontal = 8,
	paddingVertical = 8,
	borderRadius = 8,
	extraStyles = {},
	accessoryLeft = null,
	accessoryRight = null,
}) => {
	return (
		<button
			className={styles.container}
			style={{
				backgroundColor: buttonStyle === 'filled' ? color : 'transparent',
				borderColor: buttonStyle === 'bordered' ? color : 'transparent',
				borderRadius,
				padding: `${paddingVertical}px ${paddingHorizontal}px`,
				borderWidth: 1,
				borderStyle: 'solid',
				...extraStyles,
			}}
		>
			{accessoryLeft}
			{icon !== null && <Icon {...icon} />}
			{label !== null && <Label {...label} />}
			{accessoryRight}
		</button>
	);
};
