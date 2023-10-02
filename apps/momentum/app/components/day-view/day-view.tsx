import { TaskDay } from '@/utils/days.utils';
import { cx } from '@/utils/utils';

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
  const activeDimmedClasses = {
    'text-primary': active,
    'text-light-dimmed dark:text-dark-dimmed': dimmed,
    'dark:text-white': !dimmed && !active,
  };

  return (
    <div className={cx('h-[4.25rem] w-[2.827rem]', activeDimmedClasses)}>
      <p className="text-center font-semibold text-lg tracking-tight">{day}</p>
      <p className="font-medium font text-sm text-center mt-0.5">{weekday}</p>
      {active && (
        <div className="bg-primary h-0.5 w-full rounded-t-sm mt-[0.920rem]" />
      )}
    </div>
  );
};
