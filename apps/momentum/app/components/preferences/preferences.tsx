'use client';
import {
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  Typography,
} from '@material-tailwind/react';
import { ChangeEvent, MouseEvent } from 'react';
import { useTheme } from '../../../utils/theme';

const Preferences = () => {
  const { mode, toggle } = useTheme();
  const listStyles =
    'dark:text-white dark:active:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent';

  const changeTheme = (e: MouseEvent | ChangeEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <List className="my-5">
      <ListItem className={listStyles} onClick={changeTheme}>
        <Switch
          label={mode}
          value={mode}
          checked={mode === 'dark'}
          onChange={changeTheme}
          labelProps={{
            className: 'capitalize dark:text-white',
          }}
        />
      </ListItem>
      <ListItem className={listStyles}>
        <ListItemPrefix>
          <i className="fa-solid fa-chart-pie fa-lg"></i>
        </ListItemPrefix>
        <Typography>Statistics</Typography>
      </ListItem>
      <ListItem className={listStyles}>
        <ListItemPrefix>
          <i className="fa-solid fa-gear fa-lg"></i>
        </ListItemPrefix>
        <Typography>Settings</Typography>
      </ListItem>
    </List>
  );
};

export default Preferences;
