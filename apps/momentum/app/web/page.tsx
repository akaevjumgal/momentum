import { Metadata } from 'next';
import ClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Good Morning',
};

export default function Page() {
  return <ClientPage />;
}
