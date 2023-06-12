import {
  styled,
  alpha,
  InputBase,
  Card,
  Theme,
  CSSObject,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// MUI Box
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
//sidebar comp import
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

// topNavigation bar
const drawerWidth = 290;
const smWidth = 50;
interface AppBarProps extends MuiAppBarProps {
  isopen?: boolean;
}
interface DrawerPorps extends MuiDrawerProps {
  isopen?: boolean;
}
interface BoxProps extends MuiBoxProps {
  isopen?: boolean;
}

export const HoverBox = styled(Card)<MuiBoxProps>(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '4.2rem',
  transform: 'translateY(-50%)',
  // left: smWidth + 8,
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.primary.light,
  fontWeight: 'bold',
  boxShadow: theme.shadows[5],
  padding: '0.5rem 1rem',
  width: 150,
  height: 'auto',
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isopen',
})<AppBarProps>(({ theme, isopen }) => ({
  zIndex: 100,
  background: theme.palette.primary.main,
  boxShadow: 'none',
  ...(isopen
    ? {
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// side Navigation bar
const openedMixin = (theme: Theme): CSSObject => ({
  marginTop: theme.spacing(7),
  width: drawerWidth,
  // / transform: 'translateX(-100%)',
  left: '-100%',
  transition: theme.transitions.create(['width', 'left'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    left: 0,
  },
  [theme.breakpoints.up('lg')]: {
    width: drawerWidth,
    left: 0,
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  marginTop: theme.spacing(7),
  width: drawerWidth,
  left: '0',
  transition: theme.transitions.create(['width', 'left'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: 'hidden',
  [theme.breakpoints.up('lg')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    left: 0,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DrawerPorps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
    },
  }),
  '& .MuiPaper-root': {
    color: 'rgba(15, 18, 18, 0.808)',
  },
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: 0,
  background: theme.palette.background.paper,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Main component

export const Main = styled(MuiBox, {
  shouldForwardProp: (prop) => prop !== 'isopen',
})<BoxProps>(({ theme, isopen }) => ({
  background: theme.palette.primary.main,
  ...(isopen
    ? {
        // marginLeft: smWidth,
        // width: `calc(100% - ${smWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')]: {
          marginLeft: smWidth,
          width: `calc(100% - ${smWidth}px)`,
        },
        [theme.breakpoints.up('lg')]: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
        },
      }
    : {
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('lg')]: {
          marginLeft: smWidth + 10,
          width: `calc(100% - ${smWidth + 10}px)`,
        },
      }),
}));

// custom tooltip for sublink
export const HoverLink = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    position: 'absolute',
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    top: -10,
    left: 20,
  },
}));
