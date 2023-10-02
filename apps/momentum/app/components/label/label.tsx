import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './label.module.css';
import { cx } from '../../../utils/utils';
import { useTheme } from '../../../utils/theme';

export interface LabelProps
  extends PropsWithChildren<HTMLAttributes<HTMLLabelElement>> {
  color?: string;
}

export const Label = ({
  children,
  color = 'default',
  className,
  ...props
}: LabelProps) => {
  const { mode } = useTheme();
  return (
    <label
      className={cx(styles.root, styles[`__muted--${mode}`], className)}
      {...props}
    >
      <span className={cx(styles.__square, styles[`__${color}`])}></span>
      <p>{children}</p>
    </label>
  );
};
