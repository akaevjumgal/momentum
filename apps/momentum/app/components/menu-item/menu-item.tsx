import Image from 'next/image';
import { PropsWithChildren } from 'react';

import styles from './menu-item.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';

interface MenuItemProps {
  iconUrl?: string;
}

export const MenuItem = ({
  children,
  iconUrl,
}: PropsWithChildren<MenuItemProps>) => {
  const { mode } = useTheme();

  return (
    <li className={styles._root}>
      {iconUrl && <Image src={iconUrl} alt={iconUrl} width={24} height={24} />}
      <p className={cx(styles.label, `text--${mode}`)}>{children}</p>
    </li>
  );
};
