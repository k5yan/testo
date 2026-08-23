import { TabsList } from '../../../../shared/ui/TabsList';
import { homeTabs } from '../../../../shared/config';
import type React from 'react';
import type { HomeTabsProps } from './types';

export const HomeTabs: React.FC<HomeTabsProps> = ({ onTabPress, activeTab }) => {
	return <TabsList tabs={homeTabs} onTabPress={onTabPress} activeTab={activeTab} />;
};
