import { Icon } from '../Icon';

export const Logo: React.FC = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			{/* <Label text={'Busyboard'} weight={'bold'} size={25} /> */}
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<div style={{ paddingTop: 0 }}>
					<Icon name={'logo_half1'} height={19} width={43} />
				</div>
				<div style={{ marginLeft: -1.5 }}>
					<Icon name={'logo_half2'} height={23} width={80} />
				</div>
			</div>
		</div>
	);
};
