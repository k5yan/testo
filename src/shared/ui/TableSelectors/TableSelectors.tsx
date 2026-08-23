import { useMemo } from 'react';
import { Selector } from '../Selector';
import type React from 'react';
import type { TableSelectorsProps } from './types';
import styles from './TableSelectors.module.scss';

export const TableSelectors: React.FC<TableSelectorsProps> = ({ selectors }) => {
	const selectorsGrid = useMemo(() => {
		return selectors.map((item, index) => <Selector key={`${index}`} {...item} />);
	}, [selectors]);

	return <div className={styles.container}>{selectorsGrid}</div>;
};
