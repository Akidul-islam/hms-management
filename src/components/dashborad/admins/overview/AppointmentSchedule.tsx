import * as React from 'react';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography, useTheme } from '@mui/material';
import WrapperContainer from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicMenu from '../../../common/BasicMenu';
import ApointDateAndTime from './ApointDateAndTime';
const AppointmentSchedule: React.FC = () => {
  const {
    shadows,
    transitions,
    palette: { primary },
  } = useTheme();
  return (
    <WrapperContainer sx={{ flex: 1, p: 2, boxShadow: shadows[1] }}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h6' sx={{ color: primary.dark }}>
          Appoinment Schedule
        </Typography>
        <BasicMenu menuItem={['Info', 'details', 'Appoinment']}>
          <MoreVertIcon
            sx={{
              color: primary.dark,
              transition: transitions.easing.sharp,
              '&:hover': { boxShadow: shadows[1] },
            }}
          />
        </BasicMenu>
      </Box>
      <Box
        flex={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
          '&.MuiBox-root': { px: 0 },
        }}
      >
        <DateCalendarValue />
        <ApointDateAndTime />
      </Box>
    </WrapperContainer>
  );
};

export default AppointmentSchedule;

// clandar
function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(new Date().toString())
  );
  const {
    palette: { primary, secondary },
    shadows,
  } = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        sx={{
          background: primary.main,
          // py: 1,
          color: '#213555',
          fontFamily: 'poppins',
          // padding: 0,
          '&.MuiBox-root': { padding: 0 },
          '&.MuiStack-root': {
            flexDirection: 'row',
            // : 'space-between',
            // padding: 0,
          },
        }}
        components={['DateCalendar', 'DateCalendar']}
      >
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              width: '100%',
              maxWidth: 280,
              height: 'auto',
              '.MuiIconButton-root': {
                color: secondary.main,
              },
              '.MuiTypography-root': {
                color: secondary.main,
                fontSize: '0.8rem',
                fontWeight: 500,
              },
              '.Mui-selected': {
                color: ' secondary.main',
              },
              '.MuiPickersDay-root': {
                background: '#7fdfc938',
                boxShadow: shadows[2],
                '&:hover': {
                  color: primary.main,
                  background: secondary.main,
                },
              },
              '.MuiPickersYear-root': {
                '&:hover': {
                  color: primary.dark,
                },
              },
              '.MuiPickersDay-dayWithMargin': {
                mt: '4px',
              },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
