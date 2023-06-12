import { Box, Typography } from '@mui/material';
import FooterItem from '@mui/material/Box';
import * as React from 'react';
import CardBox from '../../components/common/Card';
import PatientPercentage from '../../components/dashborad/admins/overview/PatientPercentage';
import AppointmentSchedule from '../../components/dashborad/admins/overview/AppointmentSchedule';
import TopRatedDoctorList from '../../components/dashborad/admins/overview/TopRatedDoctorList';
import RecentPatientJoin from '../../components/dashborad/admins/overview/RecentPatientJoin';

const OverviewPage: React.FC = () => {
  // const theme = useTheme();
  return (
    <Box component={'section'}>
      <Typography variant='h5' color={'darkslategray'}>
        Dashborad
      </Typography>
      <Typography component={'p'}>Hospital Admin Dashboard</Typography>
      <CardBox />
      <Box
        display={'flex'}
        sx={{ flexDirection: { sm: 'column', lg: 'row', xs: 'column' } }}
        mt={4}
        gap={2}
      >
        <PatientPercentage />
        <AppointmentSchedule />
      </Box>
      <FooterItem
        mt={2}
        display={'flex'}
        gap={2}
        sx={{
          flexDirection: { sm: 'column', lg: 'row' },
        }}
      >
        <TopRatedDoctorList />
        <RecentPatientJoin />
      </FooterItem>
    </Box>
  );
};

export default OverviewPage;
