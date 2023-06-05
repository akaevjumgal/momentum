'use client';
import { WeekView } from './components/week-view/week-view';
import { useTheme } from './theme';

interface Todo {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

// const todos: Todo[] = [
//   {
//     id: '1',
//     title: 'Buy milk',
//     description: 'Buy some milk',
//     done: true,
//   },
//   {
//     id: '2',
//     title: 'Buy eggs',
//     description: 'Buy some eggs',
//     done: false,
//   },
//   {
//     id: '2',
//     title: 'Buy bananas',
//     description: 'Buy some bananas',
//     done: true,
//   },
// ];

export default function Page() {
  const { mode } = useTheme();
  return (
    <div>
      <WeekView />
      <div
        style={{ height: 'calc(100vh - 10.5rem);' }}
        className={`bg--${mode}`}
      />
    </div>
  );
}
