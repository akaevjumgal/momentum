import { FC, HTMLProps, PropsWithChildren } from 'react';

import styles from './card.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';

export const Card: FC<PropsWithChildren & HTMLProps<HTMLElement>> = ({
  children,
  className,
}) => {
  const { mode } = useTheme();
  return (
    <article className={cx(className, styles.root, styles[`card--${mode}`])}>
      {children}
    </article>
  );
};
