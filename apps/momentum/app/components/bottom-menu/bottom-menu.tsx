import { PropsWithChildren } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import styles from './bottom-menu.module.css';

interface BottomMenuProps extends PropsWithChildren {
  opened: boolean;
  onClose: () => void;
}

export const BottomMenu = ({ onClose, opened, children }: BottomMenuProps) => {
  const { mode } = useTheme();

  const slideState = opened ? styles.opened : styles.closed;

  return (
    <div
      className={cx({ [styles.overlay]: opened }, styles[`overlay--${mode}`])}
    >
      <div className={cx(styles.root, `bg--${mode}`, slideState)}>
        <div className={styles.drag_down__area} onClick={onClose}>
          <div className={cx(styles.drag_down, styles[`drag_down--${mode}`])} />
        </div>
        {children}
      </div>
    </div>
  );
};
