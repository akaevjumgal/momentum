import { HTMLAttributes } from 'react';

import { cx } from '../../utils';
import { DateType, date } from '../../days.utils';

interface TaskDateView extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

const TODAY = 'Today';
const TOMORROW = 'Tomorrow';

const TaskDateView = ({ children, className, ...props }: TaskDateView) => {
  const parsedDate: DateType = date(children);
  const tomorrow = date().add(1, 'day');

  let day = TODAY;

  if (parsedDate.isSame(tomorrow, 'day')) {
    day = TOMORROW;
  }

  if (parsedDate.isAfter(tomorrow, 'day')) {
    day = `${parsedDate.format('MMM')} ${parsedDate.format('DD')}`;
  }

  return (
    <p
      className={cx(
        'font-medium text-xs flex items-center text-light-muted dark:text-dark-muted',
        className
      )}
      {...props}
    >
      {day}{' '}
      <span className="block rounded full mx-2 h-1 w-1 bg-light-muted dark:bg-dark-muted" />{' '}
      {parsedDate.format('dddd')}
    </p>
  );
};

export { TaskDateView };
