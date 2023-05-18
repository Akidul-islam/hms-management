import { Box, styled } from '@mui/material';

export const SideBarBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '20%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: 'tomato',
  // color: 'black',
  transition: 'all .2s ease',
}));
