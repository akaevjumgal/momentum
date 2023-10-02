'use client';
import { PropsWithChildren, useState } from 'react';
import { ThemeMode, ThemeModeContext, customTheme } from '@/utils/theme';
import { ThemeProvider } from '@material-tailwind/react';
import './global.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from '@tanstack/react-query';

export default function ClientLayout({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  const dehydratedState = dehydrate(queryClient);

  const [mode, setMode] = useState<ThemeMode>('dark');
  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <ThemeProvider value={customTheme}>
          <ThemeModeContext.Provider value={{ mode, setMode, toggle }}>
            <main className={mode}>{children}</main>
          </ThemeModeContext.Provider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
