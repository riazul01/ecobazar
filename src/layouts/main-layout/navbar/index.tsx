import { Box, AppBar, Toolbar, Button, Typography, IconButton, Stack } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Navbar = () => {
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
