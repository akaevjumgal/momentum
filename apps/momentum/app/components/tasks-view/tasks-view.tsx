import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { MenuItem } from '../menu-item/menu-item';

import styles from './tasks-view.module.css';

interface TaskCategory {
  label: string;
  color: string;
}

interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  done: boolean;
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Design Dribbble concept',
    category: {
      label: 'Work',
      color: 'orange',
    },
    done: true,
  },
  {
    id: '2',
    title: 'Make dinner',
    category: {
      label: 'Lifestyle',
      color: 'primary',
    },
    done: false,
  },
  {
    id: '3',
    title: 'Planning next week',
    category: {
      label: 'Personal',
      color: 'ocean',
    },
    done: true,
  },
  {
    id: '4',
    title: 'Solve medium leet code',
    category: {
      label: 'Hobby',
      color: 'scarlet',
    },
    done: false,
  },
];

export const TasksView = () => {
  const { mode } = useTheme();

  return (
    <ul className={cx(styles.root)}>
      {tasks.map((task) => (
        <MenuItem
          key={task.id}
          className={cx(styles.__line, styles[`__line--${mode}`])}
          markable
          label={{
            color: task.category.color,
            children: task.category.label,
          }}
        >
          {task.title}
        </MenuItem>
      ))}
    </ul>
  );
};
