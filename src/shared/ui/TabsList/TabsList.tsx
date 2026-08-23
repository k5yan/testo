import { useMemo } from 'react';
import { Tab } from '../Tab';
import type { TabsListProps } from './types';
import styles from './TabsList.module.scss';

export const TabsList: React.FC<TabsListProps> = ({ tabs, onTabPress, activeTab }) => {
	const tabsList = useMemo(() => {
		return tabs.map((tab) => {
			return <Tab key={tab.id} {...tab} onPress={onTabPress} isActive={tab.id === activeTab} />;
		});
	}, [tabs, onTabPress, activeTab]);

	return <div className={styles.container}>{tabsList}</div>;
};
