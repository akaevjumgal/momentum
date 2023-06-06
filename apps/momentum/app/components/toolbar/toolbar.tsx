'use client';
import { useState } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { IconButton } from '../icon-button/icon-button';
import styles from './toolbar.module.css';
import { BottomMenu } from '../bottom-menu/bottom-menu';

export const Toolbar = () => {
  const { mode } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <footer
      className={cx(styles.root, `bg--${mode}`, styles[`__border--${mode}`])}
    >
      <div style={{ display: 'flex', columnGap: '0.25rem' }}>
        <IconButton
          iconUrl="/assets/menu.svg"
          color="transparent"
          onClick={() => setMenuOpen(true)}
        />
        <IconButton iconUrl="/assets/search.svg" color="transparent" />
      </div>

      <div>
        <IconButton iconUrl="/assets/plus.svg" iconSize={24} />
        <BottomMenu opened={isMenuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </footer>
  );
};
