'use client';
import { useTheme } from '../../theme';
import { MenuItem } from '../menu-item/menu-item';

import styles from './preferences.module.css';

interface MenuOption {
  iconUrl: string;
  label: string;
}

const MenuOptions: MenuOption[] = [
  {
    iconUrl: '/assets/menu/statistics.svg',
    label: 'Statistics',
  },
  {
    iconUrl: '/assets/menu/settings.svg',
    label: 'Settings',
  },
];

export const Preferences = () => {
  const { mode } = useTheme();

  return (
    <ul className={styles.options}>
      {MenuOptions.map(({ iconUrl, label }) => (
        <MenuItem
          key={label}
          className={styles[`__line--${mode}`]}
          iconUrl={iconUrl}
        >
          {label}
        </MenuItem>
      ))}
    </ul>
  );
};
