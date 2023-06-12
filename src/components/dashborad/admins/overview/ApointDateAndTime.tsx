import * as React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';

interface ListItems {
  listItems?: any;
}
const ApointDateAndTime: React.FC<ListItems> = ({
  listItems = [
    { ImageIcon, create_at: '09:00 - 10:30 AM', label: 'Dr. someone' },
    { ImageIcon, create_at: '09:00 - 10:30 AM', label: 'Dr. Akidul islam' },
  ],
}) => {
  return (
    <List sx={{ flex: 1, padding: 0 }}>
      {listItems.map((item: any) => (
        <ListItem key={item.label}>
          <Typography
            variant={'h6'}
            sx={{ color: 'primary.dark', display: 'none' }}
          >
            Wednesday, June 3th
          </Typography>
          <ListItemText
            sx={{
              ml: 2,
              '.MuiListItemText-secondary': { color: 'darkgrey', mt: 1 },
              '.MuiListItemText-primary': { fontWeight: 500, mt: 1 },
            }}
            primary={item.label}
            secondary={item.create_at}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ApointDateAndTime;
