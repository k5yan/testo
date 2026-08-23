import type { ReactNode, CSSProperties } from 'react';

export type LabelWeight = 'regular' | 'medium' | 'bold';

export interface LabelProps {
	weight?: LabelWeight;
	size?: number;
	color?: CSSProperties['color'];
	text: ReactNode; // string;
	textAlign?: CSSProperties['textAlign'];
}
