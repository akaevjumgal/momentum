'use client';
import { createContext, useContext } from 'react';

type ThemeMode = 'light' | 'dark';

interface MomentumTheme {
  mode: ThemeMode;
}

export const ThemeModeContext = createContext<MomentumTheme>({
  mode: 'dark',
});

export const useTheme = () => {
  const { mode } = useContext(ThemeModeContext);

  return { mode };
};
