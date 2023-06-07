import { useEffect, useState } from 'react';
import { date } from '../../days.utils';
import { useTheme } from '../../theme';
import { cx } from '../../utils';
import { MenuItem } from '../menu-item/menu-item';
import { TaskDateView } from '../task-date-view/task-date-view';

import styles from './tasks-view.module.css';

interface TaskCategory {
  label: string;
  color?: string;
}

interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  done: boolean;
}

interface TaskPerDate {
  date: string;
  tasks: Task[];
}

const tasksPerDate: TaskPerDate[] = [
  {
    date: date().format(),
    tasks: [
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
    ],
  },
  {
    date: date().add(1, 'day').format(),
    tasks: [
      {
        id: '5',
        title: 'Call dad',
        category: {
          label: 'Personal',
          color: 'ocean',
        },
        done: true,
      },
      {
        id: '6',
        title: 'Study LOTR',
        category: {
          label: 'Hobby',
          color: 'scarlet',
        },
        done: false,
      },
      {
        id: '7',
        title: 'Call dad',
        category: {
          label: 'No list',
        },
        done: false,
      },
    ],
  },
  {
    date: date().add(2, 'day').format(),
    tasks: [
      {
        id: '8',
        title: 'Publish case study',
        category: {
          label: 'Work',
          color: 'orange',
        },
        done: true,
      },
      {
        id: '9',
        title: 'Make lunch',
        category: {
          label: 'Lifestyle',
          color: 'primary',
        },
        done: false,
      },
      {
        id: '10',
        title: 'Make daily physical exercises',
        category: {
          label: 'Hobby',
          color: 'scarlet',
        },
        done: false,
      },
    ],
  },
  {
    date: date().add(3, 'day').format(),
    tasks: [
      {
        id: '11',
        title: 'Publish case study',
        category: {
          label: 'Work',
          color: 'orange',
        },
        done: true,
      },
      {
        id: '12',
        title: 'Make lunch',
        category: {
          label: 'Lifestyle',
          color: 'primary',
        },
        done: false,
      },
      {
        id: '13',
        title: 'Make daily physical exercises',
        category: {
          label: 'Hobby',
          color: 'scarlet',
        },
        done: false,
      },
    ],
  },
];

export const TasksView = () => {
  const { mode } = useTheme();
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);

  const toggleTask = (id: string) => {
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

  return (
    <div className={cx(styles.root, styles[`root--${mode}`])}>
      {tasksPerDate.map(({ date, tasks }) => (
        <ul
          key={date}
          style={{ paddingTop: '0.5rem' }}
          className={cx(
            styles.__task_fieldset,
            styles[`__task_fieldset--${mode}`]
          )}
        >
          <div className={cx(styles.__sticky, `bg--${mode}`)}>
            <TaskDateView style={{ marginBottom: '0.5rem' }}>
              {date}
            </TaskDateView>
          </div>
          {tasks.map((task) => (
            <MenuItem
              key={task.id}
              className={cx(styles[`__line--${mode}`])}
              markable
              label={{
                color: task.category.color,
                children: task.category.label,
              }}
              checked={selectedTaskIds.includes(task.id)}
              onCheck={() => toggleTask(task.id)}
            >
              {task.title}
            </MenuItem>
          ))}
        </ul>
      ))}
    </div>
  );
};
