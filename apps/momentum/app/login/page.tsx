import { useServerSession } from '@/lib/server-hooks';
import ClientLoginPage from './client-page';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const { isLoggedIn } = useServerSession();

  if (isLoggedIn) {
    redirect('/web');
  }

  return <ClientLoginPage />;
}
