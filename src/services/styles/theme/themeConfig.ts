import { PaletteMode } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  Theme,
  responsiveFontSizes,
} from '@mui/material/styles';
// import { BreakpointOverrides } from '@mui/material/styles/createBreakpoints';

// variable type
type ColorTokens = {
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
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
    };
    text: {
      primary: string;
    };
    background: {
      paper: string;
      default: string;
    };
  };
}

// breakpoin
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    tablet: true;
    minIpad: true;
    md: true;
    laptop: true;
    lg: true;
    xl: true;
  }
}

// Color vairiant choose
const lightMode: ColorTokens = {
  primary: '#F2F2F2',
  secondary: '#fcf0dd',
  tertiary: '#8884d8',
  background: '#2d2d34',
};

const darkMode: ColorTokens = {
  primary: '#1F7A65',
  secondary: '#1f7a65',
  tertiary: '#8884d8',
  background: '#F2F2F2',
};

// color selector
const colorTokens = (mode: string): ColorTokens => ({
  ...(mode === 'dark' ? lightMode : darkMode),
});

const themeSetting = (mode: PaletteMode): ThemeSettings => ({
  palette: {
    mode: mode,
    primary: {
      main: '#efefef',
      dark: '#213555',
    },
    secondary: {
      main: '#1F7A65',
      light: '#D2E9E9',
    },
    text: {
      primary: '#000',
    },
    background: {
      paper: '#F2F2F2',
      default: '#F9F9F9',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 640,
      minIpad: 768,
      md: 900,
      laptop: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 13,
  },
});

const themeConfi: Theme = createTheme(themeSetting('dark'));
const theme = responsiveFontSizes(themeConfi);
export default theme;
