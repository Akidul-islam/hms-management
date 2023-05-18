import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      backgroundColor: 'white',
      outline: 'none',
      borderRadius: 4,
      padding: '16px',
      Outline: 'none',
    },
    '& .MuiInputBase-root': {
      // Add custom styles to the root element of the input field
      border: '1px solid rgba(0,0,0,0.2)',
      borderRadius: 6,
      Outline: 'none',
      // boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px',
    margin: '0 auto',
    height: 200,
  },
});
