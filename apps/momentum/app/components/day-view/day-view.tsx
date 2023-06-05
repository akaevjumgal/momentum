'use client';

import { TaskDay } from '../../days.utils';
import { useTheme } from '../../theme';
import { cx } from '../../utils';

import styles from './day-view.module.css';

interface DayViewProps extends TaskDay {
  active?: boolean;
  dimmed?: boolean;
}

export const DayView = ({
  day,
  weekday,
  active = false,
  dimmed = false,
}: DayViewProps) => {
  const { mode } = useTheme();

  const activeDimmedClasses = {
    [styles.__active]: active,
    [styles[`__dimmed--${mode}`]]: dimmed,
    [`text--${mode}`]: !dimmed || !active,
  };

  return (
    <div className={cx(styles.root, activeDimmedClasses)}>
      <p className={styles.__day}>{day}</p>
      <p className={styles.__weekday}>{weekday}</p>
      {active && <div className={styles.__bar} />}
    </div>
  );
};
