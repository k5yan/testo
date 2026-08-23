import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { useJoyride, type Step } from 'react-joyride';
import { HomeTabs } from '../../../widgets/home/HomeTabs';
import { HomeTables } from '../../../widgets/home/HomeTables';
import type { TabProps } from '../../../shared/ui/Tab/types';
import { JoyrideTooltip } from '../../../shared/ui/JoyrideTooltip';

export const HomePage: React.FC = () => {
	const [activeTabId, setActiveTabId] = useState<string>('');
	const handleTabPress = (tabId: TabProps['id']): void => {
		setActiveTabId(tabId);
	};

	const steps: Array<Step> = [
		{
			target: 'body',
			placement: 'center',
			title: 'Добро пожаловать в раздел заявки на поставку!',
			content:
				'Тут вы можете создать заявку на поставку и она появится в вашем кабинете или выгрузить уже созданные чтобы на основе них создать отгрузки',
			skipBeacon: true,
		},
		{
			content: 'Нажмите на эту кнопку чтобы подтянуть актуальные заявки на поставку',
			target: '#download-by-api',
			skipBeacon: true,
		},
		{
			content: 'Супер теперь давать создадим свою собвенную заявку на поставку!',
			target: '#new-order',
			skipBeacon: true,
		},
		{
			title: 'Вы большой молодец!',
			content: 'Поздравляем с освоением нового раздела, надеюсь он принесет вам много пользы!',
			target: '#orders-table',
			skipBeacon: true,
		},
	];

	const { controls, on, Tour } = useJoyride({
		continuous: true,
		steps,
		tooltipComponent: JoyrideTooltip,
	});

	useEffect(() => {
		controls.start();

		return on('tour:end', () => {
			console.log('Tour finished!');
		});
	}, [on]);

	return (
		<div className={styles.container}>
			{Tour}
			<HomeTabs activeTab={activeTabId} onTabPress={handleTabPress} />
			{true && <HomeTables />}
		</div>
	);
};
