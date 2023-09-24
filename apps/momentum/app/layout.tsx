import { PropsWithChildren } from 'react';
import ClientLayout from './client-layout';

export default function MomentumLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
