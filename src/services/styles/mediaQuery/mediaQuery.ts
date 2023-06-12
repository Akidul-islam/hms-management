const cardBox = {
  gap1: { sm: 4, minIpad: 2, laptop: 3, lg: 2, xs: 3 },
  gap2: { sm: 4, minIpad: 2, xs: 3 },
  w1: {
    sm: '15rem',
    minIpad: '13.2rem',
    md: '15.5rem',
    laptop: '17.5rem',
    lg: '15rem',
    xs: '90%',
  },
  w2: {
    sm: '15rem',
    minIpad: '14rem',
    md: '16rem',
    laptop: '14.5rem',
    lg: '18rem',
    xs: '90%',
  },
};

const sideBarCss = {
  itemButton: (isToggling: boolean) => ({
    minHeight: 40,
    justifyContent: isToggling ? 'initial' : 'center',
  }),
  hoverLink: (isToggling: boolean, page: any) => ({
    display: isToggling
      ? { sm: 'none', xs: 'block' }
      : { sm: 'block', xs: 'none' },
    width: 'auto',
    height: 'auto',
    opacity: page ? 1 : 0,
  }),
  itemIcon1: (isToggling: boolean, active: boolean, theme: any) => ({
    minWidth: 0,
    mr: isToggling ? 3 : 'auto',
    justifyContent: 'center',
    color: active ? 'green' : 'darkgray',
    transition: theme.transitions.create(['color']),
    '&:hover': {
      color: 'green',
    },
  }),
  itemIcon2: (active: boolean, isToggling: boolean) => ({
    color: active ? 'darkgreen' : 'darkgrey',
    display: isToggling
      ? { sm: 'none', lg: 'block' }
      : { sm: 'block', lg: 'none', xs: 'block' },
  }),
};

export { cardBox, sideBarCss };
