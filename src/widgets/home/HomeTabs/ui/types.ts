import type { TabsListProps } from '../../../../shared/ui/TabsList/types';

export interface HomeTabsProps extends Pick<TabsListProps, 'onTabPress' | 'activeTab'> {}
