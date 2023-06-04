import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { MenuItem } from '../menu-item/menu-item';
import styles from './bottom-menu.module.css';

interface BottomMenuProps {
  opened: boolean;
  onClose: () => void;
}

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

export const BottomMenu = ({ onClose, opened }: BottomMenuProps) => {
  const { mode } = useTheme();
  return (
    <div className={cx(styles.overlay, `overlay--${mode}`)} onClick={onClose}>
      <div
        className={cx(styles.root, `bg--${mode}`, { [styles.opened]: opened })}
      >
        <div
          className={cx(styles.drag_down, styles[`drag_down--${mode}`])}
          onClick={onClose}
        />
        <ul className={styles.options}>
          {MenuOptions.map(({ iconUrl, label }) => (
            <MenuItem key={label} iconUrl={iconUrl}>
              {label}
            </MenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
