import { LinkProps, PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import LinkBehavior from './componentModify';

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
    };
    secondary: {
      main: string;
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
    },
    secondary: {
      main: '#1F7A65',
    },
    text: {
      primary: '#000',
    },
    background: {
      paper: '#F2F2F2',
      default: '#F9F9F9',
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const theme: Theme = createTheme(themeSetting('dark'));

export default theme;
