import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box width={1} bgcolor="info.dark" zIndex={1200}>
      <AppBar component="nav" sx={{position: 'relative', mx: "auto", px: 1.5, py: 0.5, maxWidth: 1320, bgcolor: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>Home</Button>
            <Button sx={{ color: '#fff' }}>Shop</Button>
            <Button sx={{ color: '#fff' }}>Blog</Button>
            <Button sx={{ color: '#fff' }}>About Us</Button>
            <Button sx={{ color: '#fff' }}>Contact Us</Button>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Phone
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
