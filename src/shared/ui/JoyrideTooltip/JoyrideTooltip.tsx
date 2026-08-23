import type React from 'react';
import type { TooltipRenderProps } from 'react-joyride';
import styles from './JoyrideTootlip.module.scss';

export const JoyrideTooltip: React.FC<TooltipRenderProps> = ({
	step,
	tooltipProps,
	primaryProps,
	backProps,
	skipProps,
	isLastStep,
	index,
	size,
}) => {
	return (
		<div {...tooltipProps} className={styles.tooltip}>
			<div className={styles.header}>
				{step.title ? (
					<h3 className={styles.title}>{step.title}</h3>
				) : (
					<div className={styles.content}>{step.content}</div>
				)}
				<button {...skipProps} className={styles.closeButton}>
					{'✕'}
				</button>
			</div>

			{step.title && <div className={styles.content}>{step.content}</div>}

			<div className={styles.footer}>
				<span className={styles.stepCounter}>{`${index + 1} / ${size}`}</span>

				<div className={styles.buttons}>
					{backProps && (
						<button {...backProps} className={styles.backButton}>
							{'Назад'}
						</button>
					)}

					<button {...primaryProps} className={styles.nextButton}>
						{isLastStep ? 'Завершить' : 'Далее'}
					</button>
				</div>
			</div>
		</div>
	);
};
