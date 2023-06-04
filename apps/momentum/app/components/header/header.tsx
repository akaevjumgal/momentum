'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { Avatar } from '../avatar/avatar';

import styles from './header.module.css';

interface HeaderProps {
  avatarUrl?: string;
  title?: string;
}

export const Header: FC<HeaderProps> = ({
  avatarUrl,
  title = 'Good morning 👋',
}) => {
  const { mode } = useTheme();
  return (
    <header className={cx(styles.header, `bg--${mode}`)}>
      <Avatar url={avatarUrl} />
      <div>
        <p className={cx(styles.header__title, `text--${mode}`)}>{title}</p>
      </div>
      <div className={styles.header__bell}>
        <Image
          src={`/assets/bell-${mode}.svg`}
          width={48}
          height={48}
          alt="bell"
        />
      </div>
    </header>
  );
};
