import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'components/base/Image';
import IconifyIcon from 'components/base/IconifyIcon';
import LocationSelect from './LocationSelect';
import ProfileMenu from './ProfileMenu';
import Logo from 'assets/images/logo.png';

interface HeaderProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Header = ({ toggleDrawer }: HeaderProps) => {

  return (
    <Box py={3} width={1} borderBottom={1} borderColor="info.main" zIndex={1200}>
      <Stack mx="auto" px={1.5} maxWidth={1320} alignItems="center" justifyContent="space-between">
        <ButtonBase
          component={Link}
          href="/"
          sx={{ display: { xs: 'none', md: 'flex' } }}
          disableRipple
        >
          <Image src={Logo} height={32} width={32} />
          <Typography ml={1} variant="h3" color="secondary.darker" fontWeight={500}>
            Ecobazar
          </Typography>
        </ButtonBase>

        <Stack
          width={1}
          maxWidth={480}
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <TextField
            id="product-search"
            variant="filled"
            placeholder="Search products..."
            sx={{
              width: 1,
              '& .MuiInputBase-root': {
                borderRight: 'none',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="lets-icons:search-alt" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <LocationSelect />

        <Stack mr={-1} spacing={1} alignItems="center" justifyContent="space-between">
          <Tooltip title="Search" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton size="large">
              <IconifyIcon icon="lets-icons:search-alt" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Phone" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <IconButton component={Link} href="tel:+8801234567890" size="large">
              <IconifyIcon icon="carbon:phone-voice" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cart">
            <IconButton size="large">
              <IconifyIcon icon="ph:shopping-cart-duotone" />
            </IconButton>
          </Tooltip>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <ProfileMenu />
          </Box>

          <Tooltip title="Menu">
            <IconButton size="large" onClick={toggleDrawer(true)}>
              <IconifyIcon icon="simple-line-icons:menu" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
