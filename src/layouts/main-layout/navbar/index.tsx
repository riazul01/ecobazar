import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import sitemap from 'routes/sitemap';

interface NavbarProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Navbar = ({ toggleDrawer }: NavbarProps) => {
  return (
    <Box width={1} bgcolor="info.dark" zIndex={1200}>
      <AppBar
        component="nav"
        sx={{
          mx: 'auto',
          px: 1.5,
          py: 0,
          maxWidth: 1332,
          position: 'relative',
          bgcolor: 'transparent',
          overflow: 'visible',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Stack
            flexGrow={1}
            spacing={0.5}
            alignItems="center"
            display={{ xs: 'flex', md: 'none' }}
          >
            <IconButton size="large" onClick={toggleDrawer(true)}>
              <IconifyIcon icon="clarity:menu-line" color="info.lighter" />
            </IconButton>
            <IconButton size="large">
              <IconifyIcon icon="weui:search-outlined" color="info.lighter" />
            </IconButton>
          </Stack>

          <Box ml={-2} flexGrow={1} display={{ xs: 'none', md: 'block' }}>
            {sitemap.slice(0, 5).map((item) => (
              <Button
                key={item.id}
                component={Link}
                href={item.path}
                sx={{ py: 0.75, color: 'info.lighter', fontSize: 'body1.fontSize' }}
              >
                {item.subheader}
              </Button>
            ))}
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
