import * as React from 'react';
import Sidebar from '../navigation/Sidebar';
import TopNavigationBar from '../navigation/TopNavigationBar';
import PortalComponent from '../react-portal/portal';
import { Box, useTheme } from '@mui/material';
import { Main } from '../navigation/customize.styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFun } from '../redux/actions';

interface Porps {
  children: React.ReactNode;
}
const Layout: React.FC<Porps> = ({ children }) => {
  const isToggling = useSelector((state: any) => state.nav.isToggling);
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    dispatch(toggleFun());
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <PortalComponent portalId='navigation-portal'>
        <TopNavigationBar
          sideBarOpen={handleDrawerOpen}
          isToggling={isToggling}
        />
        <Sidebar isToggling={isToggling} />
        <Box
          sx={{
            position: 'absolute',
            top: '100px',
            left: 350,
            zIndex: theme.zIndex.drawer + 1,
          }}
        ></Box>
      </PortalComponent>
      <Main component='main' isopen={isToggling} sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
