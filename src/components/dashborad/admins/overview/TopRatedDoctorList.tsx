import * as React from 'react';
import {
  useTheme,
  IconButton,
  Rating,
  Button,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
} from '@mui/material';
import Header from '@mui/material/Box';

const TopRatedDoctorList = () => {
  const { shadows } = useTheme();
  return (
    <Box sx={{ flex: 1, p: 2, boxShadow: shadows[1] }}>
      <Header display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h6' sx={{ color: 'primary.dark' }}>
          Top Rated Doctors
        </Typography>
        <Button variant='text' sx={{ color: 'secondary.main' }}>
          More
        </Button>
      </Header>
      <List
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ListItem key={item} sx={{ px: 0 }}>
            <IconButton sx={{ color: 'darkcyan' }}>{`#${
              index + 1
            }`}</IconButton>
            <ListItemAvatar>
              <Avatar
                sx={{
                  background: '#dee2d7',
                  color: 'primary.dark',
                  boxShadow: shadows[1],
                }}
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                '.MuiListItemText-primary': {
                  color: 'primary.dark',
                  fontWeight: 500,
                  cursor: 'pointer',
                },
              }}
              primary='Dr. Samantha Queque'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='secondary.main'
                  >
                    Gynecologist
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Rating
                sx={{ fontSize: 18, color: 'tomato' }}
                name='read-only'
                value={5}
                readOnly
              />
              <Typography component={'span'} color={'darkgrey'} fontSize={14}>
                355 reviews
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
          /* <Divider
              variant='fullWidth'
              sx={{ background: 'darkgrey' }}
              component='li'
            /> */
        ))}
      </List>
    </Box>
  );
};
export default TopRatedDoctorList;
