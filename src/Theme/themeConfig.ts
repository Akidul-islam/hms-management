import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

// variable type
type ColorTokens = {
  grey: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
};

// theme types
interface ThemeSettings extends ThemeOptions {
  palette: {
    mode: PaletteMode;
    primary: {
      main: string;
    };
  };
}

// Color vairiant choose
const lightMode: ColorTokens = {
  grey: '#41f2d3',
  primary: '#333',
  secondary: '#fcf0dd',
  tertiary: '#8884d8',
  background: '#2d2d34',

  // {
  //   // yellow
  //   100: '#fcf0dd',
  //   // 200: '#fae1bb',
  //   // 300: '#f7d299',
  //   // 400: '#f5c377',
  //   // 500: '#f2b455',
  //   // 600: '#c29044',
  //   // 700: '#916c33',
  //   // 800: '#614822',
  //   // 900: '#302411',
  // },
};

const darkMode: ColorTokens = {
  grey: '#41f2d3',
  primary: '#333',
  secondary: '#fcf0dd',
  tertiary: '#8884d8',
  background: '#2d2d34',
};

const colorTokens = (mode: string): ColorTokens => ({
  ...(mode === 'dark' ? lightMode : darkMode),
});

const themeSetting = (mode: PaletteMode): ThemeSettings => ({
  palette: {
    mode: mode,
    primary: {
      main: '#f9f9f9',
    },
  },
});

const theme: Theme = createTheme(themeSetting('dark'));

export default theme;
