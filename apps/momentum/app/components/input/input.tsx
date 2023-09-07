import { FC, InputHTMLAttributes } from 'react';

import styles from './input.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';

export type InputVariant = 'outlined';

interface InputProps {
  variant?: InputVariant;
  label: string;
}

export const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  className,
  type = 'text',
  variant = '',
  label,
  ...props
}) => {
  const { mode } = useTheme();

  return (
    <label className={styles[`label--${mode}`]}>
      {label}
      <input
        type={type}
        className={cx(
          styles.root,
          styles[`input--${mode}`],
          styles[`__placeholder--${mode}`],
          styles[`__${variant}--${mode}`],
          `text--${mode}`,
          className
        )}
        {...props}
      />
    </label>
  );
};
