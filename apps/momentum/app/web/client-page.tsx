import { TasksView } from '@/components/tasks-view/tasks-view';
import { WeekView } from '@/components/week-view/week-view';

export default function ClientPage() {
  return (
    <div className="bg-light-border dark:bg-dark-default">
      <WeekView />
      <TasksView />
    </div>
  );
}
