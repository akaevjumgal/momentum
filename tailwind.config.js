import withMT from '@material-tailwind/react/utils/withMT'
import colors from 'tailwindcss/colors'

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./apps/momentum/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-default': '#0e0f10',
      'placeholder': '#7e8491',
      'primary': '#05bd7a',
      'dark-border': '#181a1b',
      'light-border': '#f1f3f3',
      'dark-text': '#0e100f',
      'light-overlay': 'rgba(15, 16, 15, 0.48)',
      'dark-overlay': 'rgba(0, 0, 0, 0.64)',
      'dark-dimmed': '#31343a',
      'light-dimmed': '#c0c3c9',
      'light-checkbox': '#f4f6f6',
      'dark-checkbox': '#131416',
      'dark-muted': '#4d525b',
      'light-muted': '#7e8491',
      'orange': '#dda73c',
      'scarlet': '#cd5037',
      'ocean': '#2e72b8',
      'uncategorized': '#2b2e31',
      'input': '#2f3237'
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'sans-serif']
    }
  },
  plugins: [],
})

