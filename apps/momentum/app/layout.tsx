import './global.css';
import { Header } from './components/header/header';
import { PropsWithChildren } from 'react';

export default function MomentumLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
