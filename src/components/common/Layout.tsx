import * as React from 'react';
import Sidebar from './navigation/Sidebar';
import TopNavigationBar from './navigation/TopNavigationBar';
import PortalComponent from './Portal';
import { Box } from '@mui/material';
import { Main } from './navigation/customize.styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFun } from '../../services/store/actions/navigationAction';
import HoverSubLink from './HoverSubLink';
import useNavHandler from '../../containers/hook/useNavHandler';

interface Porps {
  children: React.ReactNode;
}
const Layout: React.FC<Porps> = ({ children }) => {
  const { isToggling, isSubLink } = useSelector((state: any) => state.nav);
  const handler = useNavHandler();
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(toggleFun());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <PortalComponent portalId='navigation-portal'>
        <TopNavigationBar
          sideBarOpen={handleDrawerOpen}
          hideHandler={handler.hideHoverLink}
          isToggling={isToggling}
        />
        <Sidebar isToggling={isToggling} />
        {isSubLink && <HoverSubLink />}
      </PortalComponent>
      <Main
        id='hide'
        component='main'
        isopen={isToggling}
        sx={{ flexGrow: 1, p: 3 }}
        onMouseOver={handler.hideHoverLink}
      >
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
