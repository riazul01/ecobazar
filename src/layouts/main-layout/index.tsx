import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from 'layouts/main-layout/sidebar';
// import Topbar from 'layouts/main-layout/topbar';
// import Header from './header';
import Navbar from './navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Stack width={1} minHeight="100vh">
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Stack component="main" direction="column" width={1}>
        {/* <Topbar /> */}
        {/* <Header /> */}
        <Navbar toggleDrawer={toggleDrawer} />
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
