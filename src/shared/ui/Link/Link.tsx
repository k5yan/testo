import React from 'react';
``;
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import type { LinkComponentProps } from './types';
import styles from './Link.module.scss';
import { Label } from '../Label';

export const Link: React.FC<LinkComponentProps> = ({ to = ROUTES.HOME, label = '' }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => `${isActive ? styles['navLink--active'] : styles.navLink}`}
		>
			<Label text={label} />
		</NavLink>
	);
};
