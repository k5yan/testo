import { icons, size as sizeConfig } from './config';
import type React from 'react';
import type { IconProps } from './types';
import styles from './Icon.module.scss';

export const Icon: React.FC<IconProps> = ({
	name,
	size = 'standart',
	width = 0,
	height = 0,
	...styleProps
}) => {
	const NamedIcon = icons[name];
	if (!name || !NamedIcon) {
		return;
	}

	return (
		<div className={styles.container}>
			<NamedIcon
				width={width || sizeConfig[size]}
				height={height || sizeConfig[size]}
				{...styleProps}
			/>
		</div>
	);
};
