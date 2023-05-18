import * as React from 'react';
import { SideBarBox } from './customize.styles';
import { Typography } from '@mui/material';

const Sidebar: React.FC = () => {
  return (
    <SideBarBox>
      <Typography variant='h6'>Rod Shop</Typography>
    </SideBarBox>
  );
};

export default Sidebar;
