import { date } from '@/utils/days.utils';

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

export const tasksPerDate: TaskPerDate[] = [
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
