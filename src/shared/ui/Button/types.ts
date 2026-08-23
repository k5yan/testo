import type { ReactNode, CSSProperties } from 'react';
import type { IconProps } from '../Icon/types';
import type { LabelProps } from '../Label/types';

export interface ButtonProps {
	onPress?: () => void;
	icon?: IconProps;
	label?: LabelProps;
	buttonStyle?: 'bordered' | 'filled';
	color?: CSSProperties['backgroundColor'];
	paddingVertical?: number;
	paddingHorizontal?: number;
	borderRadius?: number;
	extraStyles?: React.CSSProperties;
	accessoryLeft?: ReactNode;
	accessoryRight?: ReactNode;
}
