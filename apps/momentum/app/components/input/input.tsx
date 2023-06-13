import { FC, HTMLAttributes, InputHTMLAttributes } from 'react';

import styles from './input.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  type = 'text',
  ...props
}) => {
  const { mode } = useTheme();

  return (
    <input
      type={type}
      className={cx(
        styles.root,
        styles[`__placeholder--${mode}`],
        `text--${mode}`,
        className
      )}
      {...props}
    />
  );
};
