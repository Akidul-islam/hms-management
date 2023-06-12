import * as React from 'react';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme,
  IconButton,
  AvatarGroup,
  Avatar,
} from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import TotalPatient from '@mui/material/Box';
import TextContent from '@mui/material/Box';
import CircleGroup from '@mui/material/Box';
import Circle from '@mui/material/Box';
import { useStyles } from '../../../../services/styles/overview.style';
import { WrapText } from '@mui/icons-material';

const PatientPercentage: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const {
    shadows,
    palette: { secondary, primary },
    transitions,
  } = useTheme();
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flex: 1, boxShadow: shadows[1], p: 2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h6'
          sx={{ fontWeight: 500, color: primary.dark }}
          component={'span'}
        >
          Patient Percentage
        </Typography>

        {/* Tab button */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          indicatorColor='secondary'
          textColor='secondary'
          sx={{ gap: 0, overflow: 'hidden' }}
        >
          <Tab
            icon={<TodayIcon />}
            sx={{
              '&.MuiTab-root': {
                color: secondary.main,
                opacity: '50%',
                transition: transitions.easing.easeIn,
                fontSize: '0.77em',
                fontWeight: 600,
                '&:hover': { opacity: 1 },
              },
              '&.Mui-selected': { opacity: 1 },
            }}
            {...a11yProps(0)}
            label='Daily'
          />
          <Tab
            icon={<FavoriteIcon />}
            sx={{
              '&.MuiTab-root': {
                color: secondary.main,
                opacity: '50%',
                transition: transitions.easing.easeIn,
                fontSize: '0.77em',
                fontWeight: 600,
                '&:hover': { opacity: 1 },
              },
              '&.Mui-selected': { opacity: 1 },
            }}
            {...a11yProps(1)}
            label='weekly'
          />
          <Tab
            icon={<WeekendOutlinedIcon />}
            sx={{
              '&.MuiTab-root': {
                color: secondary.main,
                opacity: '60%',
                transition: transitions.easing.easeIn,
                fontSize: '0.77em',
                fontWeight: 600,
                overflow: 'hidden',
                '&:hover': { opacity: 1 },
              },
              '&.Mui-selected': { opacity: 1 },
            }}
            label='Monthly'
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <TotalPatient
        sx={{
          p: 2,
          mt: 2,
          background: secondary.light,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box display={'flex'} gap={6} flexWrap={'wrap'}>
          <IconButton
            sx={{ background: secondary.main, borderRadius: 1, px: 2 }}
          >
            <FavoriteIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <TextContent>
            <Typography>Total Patients</Typography>
            <Typography variant='h6'>562,084</Typography>
          </TextContent>
        </Box>
        <AvatarGroup total={24}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
      </TotalPatient>

      <TabPanel
        sx={{
          mt: 3,
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <CircleGroup flex={1}>
          <Circle>
            <CircleShape />
          </Circle>
        </CircleGroup>
        <TextContent flex={1} sx={{ width: '100%', maxWidth: 600 }}>
          <Typography
            className={classes.typhography}
            sx={{
              borderLeft: '0.5rem  solid #1F7A65',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            variant='h6'
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontFamily: 'poppins',
                marginLeft: '0.5rem',
              }}
            >
              45%
            </span>
            <span className={classes.inlineCss}>New Patients</span>
          </Typography>
          <Typography
            className={classes.typhography}
            sx={{
              mt: 2,
              borderLeft: '0.5rem  solid #4942E4',
            }}
            variant='h6'
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontFamily: 'poppins',
                marginLeft: '0.5rem',
              }}
            >
              73%
            </span>
            <span className={classes.inlineCss}>Recovered</span>
          </Typography>
          <Typography
            className={classes.typhography}
            sx={{
              mt: 2,
              borderLeft: '0.5rem  solid #cd42F4',
            }}
            variant='h6'
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontFamily: 'poppins',
                marginLeft: '0.5rem',
              }}
            >
              90%
            </span>
            <span className={classes.inlineCss}>In Treatment</span>
          </Typography>
        </TextContent>
      </TabPanel>
    </Box>
  );
};

export default PatientPercentage;

//
interface TabPanelProps {
  children?: React.ReactNode;
  index?: number;
  value?: number;
  sx?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return <>{value === index && <Box {...other}>{children}</Box>}</>;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CircleShape = () => {
  return (
    <svg width='200' height='200'>
      <circle
        cx='100'
        cy='100'
        r='50'
        fill='none'
        stroke='black'
        strokeWidth='4'
        strokeDasharray={230}
        // strokeLinecap='round'
        style={{ border: '4px solid red' }}
      />
    </svg>
  );
};

//  <svg
//               id='SvgjsSvg1870'
//               width='233'
//               height='233'
//               xmlns='http://www.w3.org/2000/svg'
//               version='1.1'
//               xmlns:xlink='http://www.w3.org/1999/xlink'
//               xmlns:svgjs='http://svgjs.com/svgjs'
//               className='apexcharts-svg'
//               xmlns:data='ApexChartsNS'
//               transform='translate(0, 0)'
//               style={{ background: 'transparent' }}
//             >
//               <g
//                 id='SvgjsG1872'
//                 className='apexcharts-inner apexcharts-graphical'
//                 transform='translate(9.5, 0)'
//               >
//                 <defs id='SvgjsDefs1871'>
//                   <clipPath id='gridRectMaskablgtbnn'>
//                     <rect
//                       id='SvgjsRect1874'
//                       width='312'
//                       height='330'
//                       x='-3'
//                       y='-1'
//                       rx='0'
//                       ry='0'
//                       opacity='1'
//                       stroke-width='0'
//                       stroke='none'
//                       stroke-dasharray='0'
//                       fill='#fff'
//                     ></rect>
//                   </clipPath>
//                   <clipPath id='gridRectMarkerMaskablgtbnn'>
//                     <rect
//                       id='SvgjsRect1875'
//                       width='310'
//                       height='332'
//                       x='-2'
//                       y='-2'
//                       rx='0'
//                       ry='0'
//                       opacity='1'
//                       stroke-width='0'
//                       stroke='none'
//                       stroke-dasharray='0'
//                       fill='#fff'
//                     ></rect>
//                   </clipPath>
//                 </defs>
//                 <g id='SvgjsG1876' className='apexcharts-radialbar'>
//                   <g id='SvgjsG1877'>
//                     <g id='SvgjsG1878' className='apexcharts-tracks'>
//                       <g
//                         id='SvgjsG1879'
//                         className='apexcharts-radialbar-track apexcharts-track'
//                         rel='1'
//                       >
//                         <path
//                           id='apexcharts-radialbarTrack-0'
//                           d='M 152.99999999999997 266.16036585365856 A 113.16036585365856 113.16036585365856 0 1 1 153.1975019964199 266.16019350060895'
//                           fill='none'
//                           fill-opacity='1'
//                           stroke='rgba(225,229,255,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='1.0071951219512199'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area'
//                           data:pathOrig='M 152.99999999999997 266.16036585365856 A 113.16036585365856 113.16036585365856 0 1 1 153.1975019964199 266.16019350060895'
//                         ></path>
//                       </g>
//                       <g
//                         id='SvgjsG1881'
//                         className='apexcharts-radialbar-track apexcharts-track'
//                         rel='2'
//                       >
//                         <path
//                           id='apexcharts-radialbarTrack-1'
//                           d='M 152.99999999999997 241.08841463414637 A 88.08841463414636 88.08841463414636 0 1 1 153.15374320876805 241.08828046785254'
//                           fill='none'
//                           fill-opacity='1'
//                           stroke='rgba(225,229,255,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='1.0071951219512199'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area'
//                           data:pathOrig='M 152.99999999999997 241.08841463414637 A 88.08841463414636 88.08841463414636 0 1 1 153.15374320876805 241.08828046785254'
//                         ></path>
//                       </g>
//                       <g
//                         id='SvgjsG1883'
//                         className='apexcharts-radialbar-track apexcharts-track'
//                         rel='3'
//                       >
//                         <path
//                           id='apexcharts-radialbarTrack-2'
//                           d='M 153 216.01646341463416 A 63.01646341463416 63.01646341463416 0 1 1 153.1099844211162 216.01636743509607'
//                           fill='none'
//                           fill-opacity='1'
//                           stroke='rgba(225,229,255,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='1.0071951219512199'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area'
//                           data:pathOrig='M 153 216.01646341463416 A 63.01646341463416 63.01646341463416 0 1 1 153.1099844211162 216.01636743509607'
//                         ></path>
//                       </g>
//                     </g>
//                     <g id='SvgjsG1885'>
//                       <g
//                         id='SvgjsG1890'
//                         className='apexcharts-series apexcharts-radial-series'
//                         seriesName='NewxPatient'
//                         rel='1'
//                         data:realIndex='0'
//                       >
//                         <path
//                           id='SvgjsPath1891'
//                           d='M 152.99999999999997 266.16036585365856 A 113.16036585365856 113.16036585365856 0 1 1 239.68586944350568 80.26191892167253'
//                           fill='none'
//                           fill-opacity='0.85'
//                           stroke='rgba(189,162,92,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='10.071951219512197'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area apexcharts-radialbar-slice-0'
//                           data:angle='230'
//                           data:value='64'
//                           index='0'
//                           j='0'
//                           data:pathOrig='M 152.99999999999997 266.16036585365856 A 113.16036585365856 113.16036585365856 0 1 1 239.68586944350568 80.26191892167253'
//                         ></path>
//                       </g>
//                       <g
//                         id='SvgjsG1892'
//                         className='apexcharts-series apexcharts-radial-series'
//                         seriesName='Recovered'
//                         rel='2'
//                         data:realIndex='1'
//                       >
//                         <path
//                           id='SvgjsPath1893'
//                           d='M 152.99999999999997 241.08841463414637 A 88.08841463414636 88.08841463414636 0 1 1 240.43181694930706 142.2647227469362'
//                           fill='none'
//                           fill-opacity='0.85'
//                           stroke='rgba(32,159,132,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='10.071951219512197'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area apexcharts-radialbar-slice-1'
//                           data:angle='263'
//                           data:value='73'
//                           index='0'
//                           j='1'
//                           data:pathOrig='M 152.99999999999997 241.08841463414637 A 88.08841463414636 88.08841463414636 0 1 1 240.43181694930706 142.2647227469362'
//                         ></path>
//                       </g>
//                       <g
//                         id='SvgjsG1894'
//                         className='apexcharts-series apexcharts-radial-series'
//                         seriesName='InxTreatment'
//                         rel='3'
//                         data:realIndex='2'
//                       >
//                         <path
//                           id='SvgjsPath1895'
//                           d='M 153 216.01646341463416 A 63.01646341463416 63.01646341463416 0 0 1 145.32022497994404 90.4532517477587'
//                           fill='none'
//                           fill-opacity='0.85'
//                           stroke='rgba(50,50,50,0.85)'
//                           stroke-opacity='1'
//                           stroke-linecap='butt'
//                           stroke-width='10.071951219512197'
//                           stroke-dasharray='0'
//                           className='apexcharts-radialbar-area apexcharts-radialbar-slice-2'
//                           data-angle='173'
//                           data:value='48'
//                           index='0'
//                           j='2'
//                           data:pathOrig='M 153 216.01646341463416 A 63.01646341463416 63.01646341463416 0 0 1 145.32022497994404 90.4532517477587'
//                         ></path>
//                       </g>
//                       <circle
//                         id='SvgjsCircle1886'
//                         r='62.51286585365855'
//                         cx='153'
//                         cy='153'
//                         className='apexcharts-radialbar-hollow'
//                         fill='transparent'
//                       ></circle>
//                       <g
//                         id='SvgjsG1887'
//                         className='apexcharts-datalabels-group'
//                         transform='translate(0, 0) scale(1)'
//                         style={{ opacity: 0 }}
//                       >
//                         <text
//                           id='SvgjsText1888'
//                           font-family='Helvetica, Arial, sans-serif'
//                           x='153'
//                           y='153'
//                           text-anchor='middle'
//                           dominant-baseline='auto'
//                           font-size='18px'
//                           font-weight='400'
//                           fill='#bda25c'
//                           className='apexcharts-text apexcharts-datalabel-label'
//                           style={{ fill: 'rgb(32, 159, 132)' }}
//                         >
//                           Recovered
//                         </text>
//                         <text
//                           id='SvgjsText1889'
//                           font-family='Helvetica, Arial, sans-serif'
//                           x='153'
//                           y='185'
//                           text-anchor='middle'
//                           dominant-baseline='auto'
//                           font-size='16px'
//                           font-weight='400'
//                           fill='#373d3f'
//                           className='apexcharts-text apexcharts-datalabel-value'
//                         >
//                           73%
//                         </text>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//                 <line
//                   id='SvgjsLine1896'
//                   x1='0'
//                   y1='0'
//                   x2='306'
//                   y2='0'
//                   stroke='#b6b6b6'
//                   stroke-dasharray='0'
//                   stroke-width='1'
//                   className='apexcharts-ycrosshairs'
//                 ></line>
//                 <line
//                   id='SvgjsLine1897'
//                   x1='0'
//                   y1='0'
//                   x2='306'
//                   y2='0'
//                   stroke-dasharray='0'
//                   stroke-width='0'
//                   className='apexcharts-ycrosshairs-hidden'
//                 ></line>
//               </g>
//               <g id='SvgjsG1873' className='apexcharts-annotations'></g>
//             </svg>
