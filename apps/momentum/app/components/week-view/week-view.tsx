'use client';
import { date, getCurrentWeekdays } from '../../days.utils';
import { DayView } from '../day-view/day-view';

export const WeekView = () => {
  const currentWeekdays = getCurrentWeekdays();
  return (
    <div className="h-[4.25rem] flex items-center justify-between px-5 pt-0.5 border-b border-b-light-dimmed dark:border-dark-border">
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
