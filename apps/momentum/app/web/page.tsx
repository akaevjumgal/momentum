import { Header } from '@/components/header/header';
import { TasksView } from '@/components/tasks-view/tasks-view';
import { Toolbar } from '@/components/toolbar/toolbar';
import { WeekView } from '@/components/week-view/week-view';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Good Morning',
};
export default async function Page({ children }: PropsWithChildren) {
  return (
    <div className="bg-light-border dark:bg-dark-default">
      <Header />
      <WeekView />
      <TasksView />
      {children}
      <Toolbar />
    </div>
  );
}
