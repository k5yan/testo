import { useMemo, useState } from 'react';
import { COLORS } from '../../constants/theme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Label } from '../Label';
import type { SelectorProps } from './types';
import styles from './Selector.module.scss';

export const Selector: React.FC<SelectorProps> = ({
	value = '',
	label = null,
	placeholder = 'Выбрать',
	// setValue = () => {},
	// data = [],
}) => {
	const [dataVisible, setDataVisible] = useState<boolean>(false);
	const toggleDataVisibility = (): void => {
		setDataVisible((prev) => !prev);
	};

	const selectorArrow = useMemo(() => {
		return (
			<div
				style={{
					transform: `rotate(${dataVisible ? 0 : 180}deg)`,
				}}
			>
				<Icon name={'arrowDown'} size={'secondary'} />
			</div>
		);
	}, [dataVisible]);

	return (
		<div className={styles.container}>
			{label !== null && <Label {...label} color={COLORS.BLACK} size={14} />}
			<Button
				onPress={toggleDataVisibility}
				label={{
					text: value || placeholder,
					color: value ? COLORS.BLACK : COLORS.GRAY,
					weight: 'regular',
					size: 14,
				}}
				accessoryRight={selectorArrow}
				paddingHorizontal={20}
				paddingVertical={13}
				buttonStyle={'bordered'}
				color={COLORS.GRAY_LIGHT}
				extraStyles={{
					backgroundColor: COLORS.WHITE,
					justifyContent: 'space-between',
				}}
			/>
			{dataVisible && <></>}
		</div>
	);
};
