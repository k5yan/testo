import type { ReactNode, CSSProperties } from 'react';
import { COLORS } from '../../constants/theme';

export type LabelWeight = 'regular' | 'medium' | 'bold';

export interface LabelProps {
	weight?: LabelWeight;
	size?: number;
	color?: CSSProperties['color'];
	text: ReactNode; // string;
	textAlign?: CSSProperties['textAlign'];
}
