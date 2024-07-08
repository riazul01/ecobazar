import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DrawerItems from './DrawerItems';

interface SidebarProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Sidebar = ({ drawerOpen, toggleDrawer }: SidebarProps) => {
  return (
    <Box component="nav" zIndex={1300}>
      <SwipeableDrawer open={drawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <DrawerItems />
      </SwipeableDrawer>
    </Box>
  );
};

export default Sidebar;
