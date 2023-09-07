import { FC, HTMLProps, PropsWithChildren } from 'react';

import styles from './button.module.css';
import { cx } from '../../utils';

export const Button: FC<PropsWithChildren & HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
}) => {
  return <button className={cx(className, styles.root)}>{children}</button>;
};
