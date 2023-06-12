import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  box: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '0px solid green',
    borderTop: '2px',
  },
  inlineCss: {
    marginLeft: '0.5rem',
    fontWeight: 400,
    letterSpacing: '1px',
    fontSize: '14px',
    color: '#27374D',
  },
  typhography: {
    py: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  dateCalendar: {},
}));
