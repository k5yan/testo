import { Link } from '../../../shared/ui';
import { Button } from '../../../shared/ui/Button';
import { Logo } from '../../../shared/ui/Logo';
import { Icon } from '../../../shared/ui/Icon';
import { Label } from '../../../shared/ui/Label';
import { ROUTES } from '../../../shared/constants';
import { COLORS, SHADOW_DEFAULT } from '../../../shared/constants/theme';
import type { CSSProperties } from 'react';
import type { IconProps } from '../../../shared/ui/Icon/types';
import type { HeaderProps } from './types';
import styles from './Header.module.scss';

export const Header: React.FC<HeaderProps> = () => {
	const favoriteButtonIcon: IconProps = {
		name: 'star',
		size: 'standart',
	};

	const buttonStyle: CSSProperties = {
		boxShadow: SHADOW_DEFAULT,
		padding: '3px 10px 3px 3px',
		gap: 10,
		textAlign: 'start',
	};

	const continueSettingIcon = (
		<div className={styles.iconCircleContainer} style={{ backgroundColor: COLORS.WHITE }}>
			<Icon name={'settings'} stroke={COLORS.PRIMARY} />
		</div>
	);

	const refreshSubscriptionIcon = (
		<div className={styles.iconCircleContainer} style={{ backgroundColor: COLORS.ERROR }}>
			<Label text={'0'} size={24} color={'WHITE'} />
		</div>
	);

	const checklistIcon = (
		<div className={styles.iconCircleContainer} style={{ backgroundColor: COLORS.WHITE }}>
			<Icon name={'check'} />
		</div>
	);

	const toggleCompanyIcon = <Icon name={'arrowDown'} size={'secondary'} />;

	return (
		<div className={styles.container}>
			<div className={styles.navigator}>
				<Logo />
				<Button
					icon={favoriteButtonIcon}
					label={{ text: 'Избранное' }}
					buttonStyle={'bordered'}
					color={COLORS.GRAY_LIGHT}
					paddingHorizontal={10}
					paddingVertical={8}
					extraStyles={{
						gap: 10,
						borderWidth: 1,
						alignSelf: 'center',
					}}
				/>
				<Link to={ROUTES.HOME} label={'Финансы'} />
				<Link to={ROUTES.WAREHOUSE} label={'Склад'} />
				<Link to={ROUTES.ANALYTICS} label={'Аналитика'} />
				<Link to={ROUTES.AUTO} label={'Автоматизация'} />
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className={styles.headerButtons}>
					<Button
						accessoryLeft={continueSettingIcon}
						label={{
							text: ['Продолжить', <br />, 'настройку'],
							weight: 'regular',
							size: 12,
							color: COLORS.WHITE,
						}}
						extraStyles={{
							borderColor: COLORS.BLUE_DARK,
							...buttonStyle,
						}}
						borderRadius={40}
					/>

					<Button
						accessoryLeft={refreshSubscriptionIcon}
						label={{
							text: ['Для продолжения', <br />, 'продлите подписку'],
							weight: 'regular',
							size: 12,
							color: COLORS.ERROR,
						}}
						extraStyles={{
							borderColor: COLORS.ERROR,
							...buttonStyle,
						}}
						color={COLORS.ERROR_HOVER}
						borderRadius={40}
					/>

					<Button
						accessoryLeft={checklistIcon}
						accessoryRight={<Label text={'2/12'} size={12} weight={'regular'} color={'WHITE'} />}
						label={{
							text: 'Чеклист запуска',
							weight: 'regular',
							size: 12,
							color: 'WHITE',
						}}
						extraStyles={{
							borderColor: COLORS.BLUE_DARK,
							...buttonStyle,
						}}
						borderRadius={40}
					/>
				</div>

				<Button
					accessoryRight={toggleCompanyIcon}
					label={{ text: 'ГК ТУЗЕМУН' }}
					color={COLORS.WHITE}
					paddingVertical={19}
					paddingHorizontal={2}
					extraStyles={{ gap: 5, width: 200, justifyContent: 'flex-end' }}
				/>

				<div className={styles.user}>
					<Button
						icon={{
							name: 'book',
						}}
						color={COLORS.WHITE}
						paddingVertical={0}
						paddingHorizontal={0}
					/>
					<Button
						icon={{
							name: 'notifications',
						}}
						color={COLORS.WHITE}
						paddingVertical={0}
						paddingHorizontal={0}
					/>

					<Button
						icon={{
							name: 'user',
							size: 'secondary',
						}}
						color={COLORS.SUCCESS}
						borderRadius={40}
					/>
				</div>
			</div>
		</div>
	);
};
