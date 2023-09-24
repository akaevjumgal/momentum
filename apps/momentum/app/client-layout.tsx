'use client';
import { PropsWithChildren, cache, useState } from 'react';
import './global.css';
import { ThemeMode, ThemeModeContext, customTheme } from './theme';
import { ThemeProvider } from '@material-tailwind/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from '@tanstack/react-query';

const getQueryClient = cache(() => new QueryClient());

export default function ClientLayout({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={customTheme}>
        <Hydrate state={dehydratedState}>
          <ThemeModeContext.Provider value={{ mode, setMode, toggle }}>
            <main className={mode}>{children}</main>
          </ThemeModeContext.Provider>
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
