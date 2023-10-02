import { TasksView } from '@/components/tasks-view/tasks-view';
import { WeekView } from '@/components/week-view/week-view';
import { Header } from '@/components/header/header';
import { Toolbar } from '@/components/toolbar/toolbar';
export default function ClientPage() {
  return (
    <div className="bg-light-border dark:bg-dark-default">
      <Header />
      <WeekView />
      <TasksView />
      <Toolbar />
    </div>
  );
}
