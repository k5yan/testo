import type { CSSProperties } from 'react';
import { icons, size } from './config';

export interface IconProps {
	name: keyof typeof icons;
	size?: keyof typeof size;
	height?: number; // приоритет над size
	width?: number; // приоритет над size
	fill?: CSSProperties['color'];
	stroke?: CSSProperties['color'];
}
