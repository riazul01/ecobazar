import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
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
          disableRipple
        >
          <Image src={Logo} height={32} width={32} />
          <Typography ml={1} variant="h3" color="secondary.darker" fontWeight={500}>
            Ecobazar
          </Typography>
        </ButtonBase>

        <Stack
          width={1}
          maxWidth={498}
          alignItems="center"
          justifyContent="center"
          display={{xs: 'none', md: 'flex'}}
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
                  <IconifyIcon icon="weui:search-outlined" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              py: 0.95,
              width: 120,
              borderRadius: 1.5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Search
          </Button>
        </Stack>

        <Stack spacing={1} alignItems="center" justifyContent="space-between">
          <IconButton size="large" sx={{ backgroundColor: 'transparent !important' }}>
            <IconifyIcon icon="ph:heart" />
          </IconButton>

          <Typography variant="h3" color="neutral.lighter" fontWeight={200}>
            |
          </Typography>

          <Stack
            component={Link}
            href="#!"
            alignItems="center"
            spacing={1}
            sx={{ cursor: 'pointer' }}
          >
            <IconButton size="large" sx={{ backgroundColor: 'transparent !important' }}>
              <Badge badgeContent={2}>
                <IconifyIcon icon="la:shopping-bag" />
              </Badge>
            </IconButton>
            <Stack direction="column" alignItems="flex-start" display={{ xs: 'none', sm: 'flex' }}>
              <Typography variant="caption" color="text.secondary" fontWeight={400}>
                Shopping cart:
              </Typography>
              <Typography variant="body1" color="text.primary" fontWeight={500}>
                $57.00
              </Typography>
            </Stack>
          </Stack>

          <IconButton size="large" onClick={toggleDrawer(true)} sx={{ display: 'none' }}>
            <IconifyIcon icon="simple-line-icons:menu" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
