'use client';
import timezone from 'dayjs/plugin/timezone';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import dayjs from 'dayjs';

dayjs.extend(timezone);
dayjs.extend(weekday);
dayjs.extend(isoWeek);

export const date = dayjs;
export type DateType = dayjs.Dayjs;

export interface TaskDay {
  day: string;
  weekday: string;
  raw: dayjs.Dayjs;
}

export const getCurrentWeekdays = (): TaskDay[] => {
  const weekdays: TaskDay[] = [];

  for (let day = 1; day <= 7; day++) {
    const rawDate = date().isoWeekday(day);
    weekdays.push({
      day: rawDate.format('DD'),
      weekday: rawDate.format('ddd'),
      raw: rawDate,
    });
  }

  return weekdays;
};
