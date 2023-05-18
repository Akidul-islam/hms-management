import * as React from 'react';
import Sidebar from '../navigation/Sidebar';
import TopNavigationBar from '../navigation/TopNavigationBar';
import PortalComponent from '../react-portal/portal';
import { Box } from '@mui/material';

interface Porps {
  children: React.ReactNode;
}
const Layout: React.FC<Porps> = ({ children }) => {
  return (
    <React.Fragment>
      <PortalComponent portalId='navigation-portal'>
        <TopNavigationBar />
        <Sidebar />
      </PortalComponent>
      <Box
        sx={{
          maxWidth: '100%',
          marginLeft: '20%',
        }}
        pt={10}
        px={2}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
