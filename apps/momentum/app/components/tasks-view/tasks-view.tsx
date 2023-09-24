'use client';
import { useEffect, useState } from 'react';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { TaskDateView } from '../task-date-view/task-date-view';

import styles from './tasks-view.module.css';
import { tasksPerDate } from './tasks.mock';
import {
  Checkbox,
  List,
  ListItem,
  ListItemSuffix,
  Typography,
} from '@material-tailwind/react';
import { Label } from '@/components/label/label';

export const TasksView = () => {
  const { mode } = useTheme();
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);

  const toggleTask = (id: string) => () => {
    if (selectedTaskIds.includes(id)) {
      setSelectedTaskIds(selectedTaskIds.filter((taskId) => taskId !== id));
    } else {
      setSelectedTaskIds([...selectedTaskIds, id]);
    }
  };

  useEffect(() => {
    tasksPerDate.forEach(({ tasks }) => {
      setSelectedTaskIds((prevTasks) => [
        ...prevTasks,
        ...tasks.filter(({ done }) => done).map(({ id }) => id),
      ]);
    });
  }, []);

  const listItemStyles =
    'hover:bg-transparent focus:bg-transparent active:bg-transparent';

  return (
    <div
      className={cx(
        'h-[calc(100vh-14.75rem)] overflow-y-auto rounded-[0.188rem]',
        styles.scrollbar,
        styles[`scrollbar--${mode}`]
      )}
    >
      {tasksPerDate.map(({ date, tasks }) => (
        <List
          key={date}
          className="border border-light-border dark:border-dark-border p-0"
        >
          <ListItem
            className={cx(
              'sticky top-0 z-10 pl-7 shadow-sm rounded-none opacity-100 bg-light-border dark:bg-dark-default',
              listItemStyles
            )}
            disabled
          >
            <TaskDateView>{date}</TaskDateView>
          </ListItem>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              onClick={toggleTask(task.id)}
              className={cx(
                listItemStyles,
                'p-0 px-4 border-b border-b-light-dimmed dark:border-b-dark-border rounded-none'
              )}
            >
              <Checkbox
                checked={selectedTaskIds.includes(task.id)}
                onChange={toggleTask(task.id)}
                className="border-none bg-light-dimmed dark:bg-dark-dimmed checked:bg-primary dark:checked:bg-primary w-6 h-6"
              />
              <Typography className="text-sm dark:text-white">
                {task.title}
              </Typography>
              <ListItemSuffix>
                <Label color={task.category.color}>{task.category.label}</Label>
              </ListItemSuffix>
            </ListItem>
          ))}
        </List>
      ))}
    </div>
  );
};
