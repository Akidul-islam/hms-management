import * as React from 'react';
import { HoverBox } from './navigation/customize.styles';
import { useSelector } from 'react-redux';
import { Typography, Zoom } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import useNavHandler from '../../containers/hook/useNavHandler';

const HoverSubLink = () => {
  const container = React.useRef(null);
  const { isToggling, page, location, isSubLink } = useSelector(
    (state: any) => state.nav
  );
  const nHandler = useNavHandler();
  React.useEffect(() => {
    const { center } = location;
    const sublink: any = container.current;
    sublink.style.top = `${center - 8}px`;
  }, [location]);

  return (
    <Zoom
      in={isSubLink}
      style={{ transformOrigin: '0 0 0' }}
      {...(isSubLink ? { timeout: 500 } : { timeout: 300 })}
    >
      <HoverBox
        ref={container}
        sx={{
          display: isToggling
            ? { sm: 'block', lg: 'none', xs: 'none' }
            : { sm: 'none', lg: 'block', xs: 'none' },
          padding: page.sub_page.length > 0 ? 'auto' : '0',
        }}
      >
        {page.sub_page.length > 0 &&
          page.sub_page.map((item: { page: string; path: string }) => (
            <RouterLink
              to={`${item.path}`}
              key={item.page}
              style={{ textDecoration: 'none' }}
              onClick={nHandler.hideHoverLink}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: 'darkgray',
                  cursor: 'pointer',
                  '&:hover': { color: 'darkgreen' },
                }}
              >
                {item.page}
              </Typography>
            </RouterLink>
          ))}
      </HoverBox>
    </Zoom>
  );
};

export default HoverSubLink;
