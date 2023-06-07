import { InputHTMLAttributes } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import styles from './checkbox.module.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { mode } = useTheme();
  return (
    <input
      className={cx(
        styles.root,
        styles[`__marker--${mode}`],
        styles[`__bg--${mode}`]
      )}
      type="checkbox"
      {...props}
    />
  );
};
