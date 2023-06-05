'use client';
import timezone from 'dayjs/plugin/timezone';
import weekday from 'dayjs/plugin/weekday';
import dayjs from 'dayjs';

dayjs.extend(timezone);
dayjs.extend(weekday);

export const date = dayjs;

export interface TaskDay {
  day: string;
  weekday: string;
  raw: dayjs.Dayjs;
}

export const getCurrentWeekdays = (): TaskDay[] => {
  const weekdays: TaskDay[] = [];

  for (let day = 1; day <= 7; day++) {
    const rawDate = date().weekday(day);
    weekdays.push({
      day: rawDate.format('DD'),
      weekday: rawDate.format('ddd'),
      raw: rawDate,
    });
  }

  return weekdays;
};
