import type { LabelProps } from './types';
import styles from './Label.module.scss';
import { COLORS } from '../../constants/theme';

export const Label: React.FC<LabelProps> = ({ text, weight = 'medium', size = 14, color = COLORS.DARK }) => {
	const weightStyle = `labelStyle--${weight}`;

	return (
		<span
			className={`${styles['labelStyle']} ${styles[weightStyle]}`}
			style={{
				color,
				fontSize: size,
			}}
		>
			{text}
		</span>
	);
};
