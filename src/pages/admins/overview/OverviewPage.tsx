import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CardBox from '../../../shareComponent/Card';

const OverviewPage: React.FC = () => {
  return (
    <Box component={'section'}>
      <Typography variant='h5' color={'darkslategray'}>
        Dashborad
      </Typography>
      <Typography component={'p'}>Hospital Admin Dashboard</Typography>
      <CardBox />
    </Box>
  );
};

export default OverviewPage;
