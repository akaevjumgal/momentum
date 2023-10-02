'use client';
import { colors } from '@material-tailwind/react/types/generic';
import { createContext, useContext } from 'react';

export type ThemeMode = 'light' | 'dark';

interface MomentumTheme {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

export const ThemeModeContext = createContext<MomentumTheme>({
  mode: 'dark',
  setMode: () => null,
  toggle: () => null,
});

export const useTheme = (): MomentumTheme => {
  return useContext(ThemeModeContext);
};

type MomentumThemeColors =
  | colors
  | 'dark-default'
  | 'dark-overlay'
  | 'dark-border'
  | 'dark-text'
  | 'dark-dimmed'
  | 'dark-checkbox'
  | 'dark-muted'
  | 'placeholder'
  | 'light-overlay'
  | 'light-border'
  | 'input'
  | 'light-dimmed'
  | 'light-checkbox'
  | 'light-muted'
  | 'scarlet'
  | 'orange'
  | 'ocean'
  | 'uncategorized'
  | 'primary';

interface TailwindStyle {
  defaultProps: {
    color: colors | MomentumThemeColors;
  };
}

type TailwindTheme = { [key: string]: TailwindStyle };

export const customTheme: TailwindTheme = {};
