import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

interface NavbarProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Navbar = ({ toggleDrawer }: NavbarProps) => {
  return (
    <Box width={1} bgcolor="info.dark" zIndex={1200}>
      <AppBar
        component="nav"
        sx={{
          position: 'relative',
          mx: 'auto',
          px: 1.5,
          py: 0.5,
          maxWidth: 1320,
          bgcolor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton size="large" onClick={toggleDrawer(true)} sx={{ display: 'none' }}>
            <IconifyIcon icon="simple-line-icons:menu" />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff', fontSize: 'body1.fontSize', fontWeight: 500 }}>
              Home
            </Button>
            <Button sx={{ color: '#fff', fontSize: 'body1.fontSize', fontWeight: 500 }}>
              Shop
            </Button>
            <Button sx={{ color: '#fff', fontSize: 'body1.fontSize', fontWeight: 500 }}>
              Blog
            </Button>
            <Button sx={{ color: '#fff', fontSize: 'body1.fontSize', fontWeight: 500 }}>
              About Us
            </Button>
            <Button sx={{ color: '#fff', fontSize: 'body1.fontSize', fontWeight: 500 }}>
              Contact Us
            </Button>
          </Box>
          <Stack spacing={0.25} alignItems="center">
            <IconButton size="large" sx={{ backgroundColor: 'transparent !important' }}>
              <IconifyIcon icon="ph:phone-call" color="info.lighter" />
            </IconButton>
            <Typography variant="body1" color="info.lighter" fontWeight={500}>
              (219) 555-0114
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
