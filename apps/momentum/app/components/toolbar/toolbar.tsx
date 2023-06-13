'use client';
import { useState } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { IconButton } from '../icon-button/icon-button';
import styles from './toolbar.module.css';
import { BottomMenu } from '../bottom-menu/bottom-menu';
import { usePathname } from 'next/navigation';
import { Preferences } from '../preferences/preferences';
import { AddTask } from '../add-task/add-task';

enum ToolbarActions {
  ADD = 'add',
  PREFERENCES = 'preferences',
  DEFAULT = 'default',
}

const componentByAction: { [key in ToolbarActions]: JSX.Element } = {
  [ToolbarActions.ADD]: <AddTask />,
  [ToolbarActions.PREFERENCES]: <Preferences />,
  [ToolbarActions.DEFAULT]: <div></div>, // stub
};

export const Toolbar = () => {
  const { mode } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [action, setAction] = useState(ToolbarActions.DEFAULT);

  const setToolbarAction = (action: ToolbarActions) => () => {
    setAction(action);
    setMenuOpen(true);
  };

  return (
    <footer
      className={cx(styles.root, `bg--${mode}`, styles[`__border--${mode}`])}
    >
      <div style={{ display: 'flex', columnGap: '0.25rem' }}>
        <IconButton
          iconUrl="/assets/menu.svg"
          color="transparent"
          onClick={setToolbarAction(ToolbarActions.PREFERENCES)}
        />
        <IconButton iconUrl="/assets/search.svg" color="transparent" />
      </div>

      <div>
        <IconButton
          iconUrl="/assets/plus.svg"
          iconSize={24}
          onClick={setToolbarAction(ToolbarActions.ADD)}
        />
        <BottomMenu opened={isMenuOpen} onClose={() => setMenuOpen(false)}>
          {componentByAction[action]}
        </BottomMenu>
      </div>
    </footer>
  );
};
