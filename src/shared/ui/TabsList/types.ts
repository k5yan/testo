import type { TabProps } from '../Tab/types';

export interface TabsListProps {
	activeTab: TabProps['id'];
	tabs: Array<Pick<TabProps, 'id' | 'label'>>;
	onTabPress: TabProps['onPress'];
}
