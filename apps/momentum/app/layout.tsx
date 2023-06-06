'use client';
import './global.css';
import { Header } from './components/header/header';
import { PropsWithChildren } from 'react';
import { Toolbar } from './components/toolbar/toolbar';
import { useTheme } from './theme';

export default function MomentumLayout({ children }: PropsWithChildren) {
  const { mode } = useTheme();
  return (
    <html lang="en">
      <body>
        <Header />
        <main
          style={{ height: 'calc(100vh - 10.5rem)' }}
          className={`bg--${mode}`}
        >
          {children}
        </main>
        <Toolbar />
      </body>
    </html>
  );
}
