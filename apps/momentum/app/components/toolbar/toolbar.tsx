'use client';
import { useState } from 'react';
import { cx } from '../../utils';
import { Button, Drawer, IconButton, Spinner } from '@material-tailwind/react';
import dynamic from 'next/dynamic';

enum ToolbarActions {
  ADD = 'add',
  PREFERENCES = 'preferences',
  DEFAULT = 'default',
}

const Loader = () => (
  <div className="p-4 flex items-center justify-center">
    <Spinner />
  </div>
);

const AddTaskComponent = dynamic(
  () => import('@/components/add-task/add-task'),
  {
    loading: Loader,
  }
);

const PreferencesComponent = dynamic(
  () => import('@/components/preferences/preferences'),
  {
    loading: Loader,
  }
);

const componentByAction: { [key in ToolbarActions]: JSX.Element } = {
  [ToolbarActions.ADD]: <AddTaskComponent />,
  [ToolbarActions.PREFERENCES]: <PreferencesComponent />,
  [ToolbarActions.DEFAULT]: <div></div>, // stub
};

export const Toolbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [action, setAction] = useState(ToolbarActions.DEFAULT);

  const setToolbarAction = (action: ToolbarActions) => () => {
    setAction(action);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const footerStyles = cx(
    'h-[5.5rem] flex items-center justify-between pr-4 pl-0.5',
    'border-t border-t-light-dimmed dark:border-t-dark-border dark:bg-dark-default'
  );
  return (
    <footer className={footerStyles}>
      <div style={{ display: 'flex', columnGap: '0.25rem' }}>
        <IconButton
          onClick={setToolbarAction(ToolbarActions.PREFERENCES)}
          variant="text"
          size="lg"
        >
          <i className="fa-solid fa-bars fa-xl dark:text-dark-muted"></i>
        </IconButton>
        <IconButton size="lg" variant="text">
          <i className="fa-solid fa-magnifying-glass fa-xl dark:text-dark-muted"></i>
        </IconButton>
      </div>
      <div>
        <IconButton
          className="bg-primary rounded-xl"
          size="lg"
          onClick={setToolbarAction(ToolbarActions.ADD)}
        >
          <i className="fa-solid fa-plus fa-lg dark:text-white" />
        </IconButton>
        <Drawer
          open={isMenuOpen}
          placement="bottom"
          onClose={closeMenu}
          className="dark:bg-dark-default rounded-t-2xl !h-auto"
        >
          <Button size="lg" variant="text" fullWidth onClick={closeMenu}>
            <div className="w-12 h-1 rounded-sm bg-light-dimmed dark:bg-dark-dimmed mx-auto" />
          </Button>
          {componentByAction[action]}
        </Drawer>
      </div>
    </footer>
  );
};
