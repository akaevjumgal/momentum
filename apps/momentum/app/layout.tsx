import { PropsWithChildren } from 'react';
import './global.css';

export default function MomentumLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
