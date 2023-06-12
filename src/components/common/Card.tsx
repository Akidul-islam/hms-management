import * as React from 'react';

import {
  AppointmentIcon,
  DoctorIcon,
  PatientIcon,
  TotalEarning,
} from '../../assets/Icon/svg';
import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { cardBox } from '../../services/styles/mediaQuery/mediaQuery';
const cardData = [
  {
    title: 'Appointment',
    num: 76,
    icon: <AppointmentIcon />,
  },
  {
    title: 'Total Patient',
    num: '127,75',
    icon: <PatientIcon />,
  },
  {
    title: 'Total Doctor',
    num: '139,904',
    icon: <DoctorIcon />,
  },
  {
    title: 'Hospital Earning',
    num: '$5,330',
    icon: <TotalEarning />,
  },
];

const CardBox: React.FC = () => {
  const isToggling = useSelector((state: any) => state.nav.isToggling);
  return (
    <Stack
      direction='row'
      mt={3}
      sx={{
        gap: isToggling ? cardBox['gap1'] : cardBox['gap2'],
        flexWrap: 'wrap',
        justifyContent: { xs: 'flex-start', sm: 'initial' },
      }}
    >
      {cardData.map((item) => (
        <Card
          key={item.title}
          sx={{
            width: isToggling ? cardBox['w1'] : cardBox['w2'],
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}
          >
            <CardContent>
              <Typography variant='h5' fontWeight={'bold'}>
                {item.num}
              </Typography>
              <Typography
                fontSize={'sm'}
                color={'darkgray'}
                component={'span'}
                sx={{ mt: 6 }}
              >
                {item.title}
              </Typography>
            </CardContent>
            <Typography variant='body2' sx={{ fontSize: '13px' }}>
              {item.icon}
            </Typography>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

export default CardBox;
