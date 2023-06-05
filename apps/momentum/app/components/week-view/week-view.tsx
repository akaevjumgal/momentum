'use client';
import { date, getCurrentWeekdays } from '../../days.utils';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { DayView } from '../day-view/day-view';

import styles from './week-view.module.css';

export const WeekView = () => {
  const currentWeekdays = getCurrentWeekdays();
  const { mode } = useTheme();

  return (
    <div
      className={cx(styles.root, `bg--${mode}`, styles[`__border--${mode}`])}
    >
      {currentWeekdays.map(({ day, weekday, raw }) => (
        <DayView
          key={day}
          day={day}
          weekday={weekday}
          raw={raw}
          active={date().isSame(raw, 'day')}
          dimmed={date().isAfter(raw, 'day')}
        />
      ))}
    </div>
  );
};
