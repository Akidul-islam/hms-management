import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { subLinkActive } from '../../services/store/actions/navigationAction';
import { SubPageTypes } from '../../services/typescript/navts';
import useNavHandler from '../../containers/hook/useNavHandler';

interface SubPages {
  pages: SubPageTypes[];
}
interface State {
  nav: { isToggling: boolean };
}
const Sublink: React.FC<SubPages> = ({ pages }) => {
  const isToggling = useSelector((state: State) => state.nav.isToggling);
  const dispatch = useDispatch();
  const handler = useNavHandler();
  //
  const subLinkHandler = (page: string) => dispatch(subLinkActive(page));
  return (
    <List
      sx={{
        py: 0,
        display: isToggling
          ? { xs: 'flex', sm: 'none', lg: 'flex' }
          : { xs: 'flex', sm: 'flex', lg: 'none' },
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      disablePadding
    >
      {pages.map((subItem) => (
        <ListItem
          onClick={() => subLinkHandler(subItem.page)}
          sx={{ display: 'unset', py: 0, px: 6 }}
          key={subItem.page}
        >
          <RouterLink
            style={{ textDecoration: 'none' }}
            to={`${subItem.path}`}
            onClick={handler.hideSidebar}
          >
            <ListItemButton sx={{ width: '100%', py: 0 }}>
              <ListItemText
                sx={{
                  color: subItem.active ? 'green' : 'darkgray',
                  transition: 'color 0.3s ease-in',
                  '&:hover': {
                    color: 'green',
                    opacity: 50,
                  },
                }}
              >
                {subItem.page}
              </ListItemText>
            </ListItemButton>
          </RouterLink>
          <Collapse in={subItem.active}>
            {subItem.staff?.map((postion) => (
              <List key={postion.job}>
                <ListItem sx={{ py: 0 }}>
                  <RouterLink
                    to={`${postion.path}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemButton sx={{ py: 0 }}>
                      <ListItemText primary={postion.job} sx={{ py: 0 }} />
                    </ListItemButton>
                  </RouterLink>
                </ListItem>
              </List>
            ))}
          </Collapse>
        </ListItem>
      ))}
    </List>
  );
};

export default Sublink;
