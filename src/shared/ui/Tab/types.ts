import type { LabelProps } from '../Label/types';

export interface TabProps {
	id: string;
	label: LabelProps;
	onPress: (id: string) => void;
	isActive: boolean;
}
