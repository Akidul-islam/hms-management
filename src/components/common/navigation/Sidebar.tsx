import * as React from 'react';
import { Drawer } from './customize.styles';
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
// Icon
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// type check
import { Link as RouterLink } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  sideBarOpen,
  subLink,
} from '../../../services/store/actions/navigationAction';
import Sublink from '../Sublink';
import { SideBarTypes } from '../../../services/typescript/navts';
import { sideBarCss } from '../../../services/styles/mediaQuery/mediaQuery';
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

  const buttonPosition = (e, page: string) => {
    const tempbtn = e.target.getBoundingClientRect();
    const center = (tempbtn.top + tempbtn.bottom) / 2;
    dispatch(subLink(page, { center }));
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
              <RouterLink
                to={`${item.path}`}
                style={{ textDecoration: 'none' }}
              >
                <ListItemButton sx={sideBarCss.itemButton(isToggling)}>
                  <ListItemIcon
                    sx={sideBarCss.itemIcon1(isToggling, item.active, theme)}
                    onMouseOver={(e) => buttonPosition(e, item.page)}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {/* </HoverLink> */}
                  <ListItemText
                    primary={item.page}
                    sx={{
                      opacity: isToggling
                        ? { sm: 0, laptop: 0, lg: 1 }
                        : { sm: 1, lg: 0, xs: 1 },
                      color: item.active ? 'darkgreen' : 'darkgray',
                      ml: isToggling ? 0 : { sm: 3, lg: 'initial', xs: 3 },
                    }}
                  />
                  <ListItemIcon
                    sx={sideBarCss.itemIcon2(item.active, isToggling)}
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
