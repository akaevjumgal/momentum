'use client';

import { PropsWithChildren } from 'react';
import { TasksView } from './components/tasks-view/tasks-view';
import { WeekView } from './components/week-view/week-view';

export default function ClientPage({ children }: PropsWithChildren) {
  return (
    <div>
      <WeekView />
      <TasksView />
      {children}
    </div>
  );
}
