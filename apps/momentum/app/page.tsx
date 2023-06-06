'use client';
import { TasksView } from './components/tasks-view/tasks-view';
import { WeekView } from './components/week-view/week-view';

export default function Page() {
  return (
    <div>
      <WeekView />
      <TasksView />
    </div>
  );
}
