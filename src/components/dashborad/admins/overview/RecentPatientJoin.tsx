import * as React from 'react';
import Header from '@mui/material/Box';
import {
  useTheme,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import Airtcles from '@mui/material/Box';
import BasicMenu from '../../../common/BasicMenu';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

const RecentPatientJoin: React.FC = () => {
  const theme = useTheme();
  return (
    <Box flex={1} p={2} sx={{ boxShadow: theme.shadows[2] }}>
      <Header display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h6' color={'primary.dark'}>
          Recent Patient Activity
        </Typography>
        <BasicMenu
          menuItem={['info', 'details']}
          btnsx={{ color: 'primary.dark', fontSize: '18px', fontWeight: 500 }}
        >
          {<ScatterPlotIcon />}
        </BasicMenu>
      </Header>
      <List
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          overflowX: 'hidden',
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ListItem key={item} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar
                sx={{
                  background: '#dee2d7',
                  color: 'primary.dark',
                  boxShadow: theme.shadows[2],
                  borderRadius: 'none',
                }}
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                '.MuiListItemText-primary': {
                  color: 'primary.dark',
                  display: 'flex',
                  justifyContent: 'space-around',
                  fontWeight: 500,
                },
              }}
              primary={
                <>
                  <Airtcles>
                    <Typography
                      fontSize={14}
                      fontWeight={500}
                      sx={{ cursor: 'pointer' }}
                    >
                      Roby Romeo islam
                    </Typography>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='darkgray'
                    >
                      41 years old
                    </Typography>
                  </Airtcles>
                  <Airtcles sx={{}}>
                    <Typography color={'primary.dark'} fontSize={12}>
                      {' '}
                      Disease
                    </Typography>
                    <Typography color={'secondary.main'} fontSize={13}>
                      {' '}
                      Allergies & Asthma
                    </Typography>
                  </Airtcles>
                  <Airtcles
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component={'span'}
                      color={'primary.dark'}
                      fontWeight={300}
                      letterSpacing={1}
                      fontSize={14}
                    >
                      status
                    </Typography>
                    <Typography
                      component='span'
                      color={'darkcyan'}
                      fontSize={12}
                      fontWeight={500}
                    >
                      Recovered
                    </Typography>
                    <Typography
                      component={'span'}
                      fontSize={10}
                      color={'darkgray'}
                    >
                      22/03/2020 12:34 AM
                    </Typography>
                  </Airtcles>
                </>
              }
              //   secondary={<Box display={'flex'} justifyContent={'center'}></Box>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecentPatientJoin;
