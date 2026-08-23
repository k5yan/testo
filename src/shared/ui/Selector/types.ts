import type { LabelProps } from '../Label/types';

export interface SelectorProps {
	label?: LabelProps;
	placeholder?: string;
	data?: Array<any>;
	value?: string;
	setValue?: (newValue: string) => void;
}
