import * as React from 'react';
import Layout from '../../layout/Layout';

const AdminPage: React.FC = () => {
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum
        placeat ipsum voluptatem repellendus obcaecati aperiam illo vero nam
        porro veritatis modi minus suscipit, error deserunt dolore sint
        quibusdam accusantium cupiditate, expedita eum. Laborum nobis
        consequatur unde quisquam animi cum modi autem ab obcaecati, aspernatur,
        at facilis doloremque dolorum dolorem cupiditate harum perferendis
        deleniti fuga delectus laboriosam possimus? Voluptates, mollitia facilis
        ducimus sunt atque eligendi officiis ipsam ipsa illum consequatur
        excepturi natus totam blanditiis libero autem! Tempora officiis
        perspiciatis voluptatem eveniet. Officia, veniam! Delectus, quam?
        Repellendus doloremque illo adipisci, consectetur nesciunt temporibus
        numquam aut possimus deleniti ullam, aliquid dolor ipsa blanditiis porro
        reprehenderit voluptatem, labore minus cumque. Doloremque aspernatur
        reprehenderit quam accusamus perspiciatis nemo labore recusandae
        pariatur nulla illo qui minima facere velit totam suscipit harum
        molestiae inventore voluptate, odit repudiandae. Possimus, sint
        corrupti! Necessitatibus minima suscipit aliquam ex eveniet inventore
        nostrum ad doloremque voluptatibus quia itaque alias ullam dolore cum
        ipsa minus deserunt mollitia, animi esse. Dolores impedit cumque
        repellendus, ipsum optio voluptas totam temporibus et. Temporibus, iusto
        dolorem harum quia saepe, aliquid sint distinctio, sapiente facere
        nostrum eum similique sunt repudiandae odio mollitia tempore modi
        aperiam earum quam. Temporibus quas nostrum qui ex optio, voluptatibus
        asperiores. Maiores nisi provident, ea ipsa fugiat corporis atque
        nesciunt eligendi expedita, quis nobis animi? Animi beatae labore
        facilis ullam voluptates quaerat? Harum totam tempore dolor quae, rem
        blanditiis perferendis in incidunt adipisci deleniti consequatur minus a
        ex voluptatibus dicta cumque quibusdam maxime ducimus ullam illo hic
        rerum veniam eaque. Nulla ullam voluptatem, earum vero atque quae eius
        in autem odit consequatur ratione iure est suscipit quo quisquam. Beatae
        officia, eius, officiis sed rem rerum delectus omnis deleniti mollitia
        molestias exercitationem doloremque excepturi numquam nulla sint, at
        quod soluta dignissimos. Magni, minima ratione sit ullam tempora
        suscipit, reprehenderit eligendi quas dolor aliquam in.
      </p>
    </Layout>
  );
};
export default AdminPage;
// import { useState } from 'react';
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import {
//   AppBar as MuiAppBar,
//   Toolbar,
//   List,
//   Divider,
//   IconButton,
//   Typography,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Box,
//   CssBaseline,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
//   MoveToInbox as InboxIcon,
//   Mail as MailIcon,
// } from '@mui/icons-material';
// import Drawer from '@mui/material/Drawer';
// import * as React from 'react';

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const AdminPage: React.FC = () => {
//   const theme = useTheme();
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* Top Navber */}
//       <AppBar position='fixed' open={isDrawerOpen}>
//         <Toolbar>
//           <IconButton
//             color='inherit'
//             aria-label='open drawer'
//             onClick={handleDrawerOpen}
//             edge='start'
//             sx={{
//               marginRight: 5,
//               ...(isDrawerOpen && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant='h6' noWrap component='div'>
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant='permanent' open={isDrawerOpen}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: isDrawerOpen ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: isDrawerOpen ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={{ opacity: isDrawerOpen ? 1 : 0 }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: isDrawerOpen ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: isDrawerOpen ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={{ opacity: isDrawerOpen ? 1 : 0 }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };
// export default AdminPage;
