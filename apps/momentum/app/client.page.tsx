'use client';

import { PropsWithChildren } from 'react';
import { TasksView } from './components/tasks-view/tasks-view';
import { WeekView } from './components/week-view/week-view';
import { Header } from './components/header/header';
import { Toolbar } from './components/toolbar/toolbar';
import { useTheme } from './theme';

export default function ClientPage({ children }: PropsWithChildren) {
  const { mode } = useTheme();

  return (
    <main className={`bg--${mode}`}>
      <Header />
      <WeekView />
      <TasksView />
      {children}
      <Toolbar />
    </main>
  );
}
