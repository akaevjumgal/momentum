import ClientPage from './client.page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good Morning',
};
export default async function Page() {
  return <ClientPage />;
}
