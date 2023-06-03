import * as React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const UnAuthorized: React.FC = () => {
  return (
    <Stack
      height={'100vh'}
      spacing={4}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography variant='h4' color={'darkmagenta'}>
        UnAuthorized
      </Typography>
      <Link to='/'>
        <Button variant='contained' sx={{ bgcolor: 'greenyellow' }}>
          back To home page
        </Button>
      </Link>
    </Stack>
  );
};

export default UnAuthorized;
