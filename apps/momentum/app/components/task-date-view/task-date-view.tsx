import { HTMLAttributes } from 'react';

import styles from './task-date.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';
import { DateType, date } from '../../days.utils';

interface TaskDateView extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

const TODAY = 'Today';
const TOMORROW = 'Tomorrow';

export const TaskDateView = ({
  children,
  className,
  ...props
}: TaskDateView) => {
  const { mode } = useTheme();

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
      className={cx(styles.root, styles[`__text--${mode}`], className)}
      {...props}
    >
      {day}{' '}
      <span className={cx(styles.__circle, styles[`__circle--${mode}`])} />{' '}
      {parsedDate.format('dddd')}
    </p>
  );
};
