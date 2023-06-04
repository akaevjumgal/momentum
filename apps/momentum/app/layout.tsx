import './global.css';
import { Header } from './components/header/header';
import { PropsWithChildren } from 'react';
import { Toolbar } from './components/toolbar/toolbar';

export default function MomentumLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ height: 'calc(100vh - 10.5rem)' }}>{children}</main>
        <Toolbar />
      </body>
    </html>
  );
}
