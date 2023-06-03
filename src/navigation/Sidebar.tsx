import * as React from 'react';
import { Drawer, HoverLink } from './customize.styles';
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
// Icon
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// type check
import { Link as RouterLink } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { sideBarOpen } from '../redux/actions';
import Sublink from '../shareComponent/Sublink';
import { SideBarTypes } from '../tsScriptTypes';
// component
// props
interface Porps {
  isToggling: boolean;
}

const Sidebar: React.FC<Porps> = ({ isToggling }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sideBar = useSelector((state: any) => state.nav.asideLink);
  const dispatch = useDispatch();
  const sideBarHandler = (page: string) => {
    dispatch(sideBarOpen(page));
  };
  const theme = useTheme();
  return (
    <Drawer variant='permanent' open={isToggling}>
      <Divider />
      <List>
        {sideBar.map((item: SideBarTypes) => {
          return (
            <ListItem
              key={item.page}
              onClick={() => sideBarHandler(item.page)}
              disablePadding
              sx={{ display: 'block' }}
            >
              {' '}
              <RouterLink
                to={`${item.path}`}
                style={{ textDecoration: 'none' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    justifyContent: isToggling ? 'initial' : 'center',
                  }}
                >
                  <HoverLink
                    title={<HoverMenu link={item.sub_page} />}
                    placement='right'
                    sx={{
                      display: isToggling
                        ? { sm: 'none', xs: 'block' }
                        : { sm: 'block', xs: 'none' },
                      width: 'auto',
                      height: 'auto',
                      opacity: item.sub_page ? 1 : 0,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isToggling ? 3 : 'auto',
                        justifyContent: 'center',
                        color: item.active ? 'green' : 'darkgray',
                        transition: theme.transitions.create(['color']),
                        '&:hover': {
                          color: 'green',
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </HoverLink>
                  <ListItemText
                    primary={item.page}
                    sx={{
                      opacity: isToggling ? 1 : { sm: 0, xs: 1 },
                      color: item.active ? 'darkgreen' : 'darkgray',
                      ml: isToggling ? 0 : { sm: 'initial', xs: 3 },
                    }}
                  />
                  <ListItemIcon
                    sx={{
                      color: item.active ? 'darkgreen' : 'darkgrey',
                      display: isToggling
                        ? 'block'
                        : { sm: 'none', xs: 'block' },
                    }}
                  >
                    {item.active ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </ListItemIcon>
                </ListItemButton>
                {}
              </RouterLink>
              <Collapse in={item.active}>
                <Sublink pages={item.sub_page} />
              </Collapse>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;

//  tempoary

const HoverMenu = ({ link }) =>
  link.map((p: any) => <Typography key={p.page}>{p.page}</Typography>);
