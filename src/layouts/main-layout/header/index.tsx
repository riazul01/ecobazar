import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconifyIcon from 'components/base/IconifyIcon';
import LocationSelect from './LocationSelect';
import ProfileMenu from './ProfileMenu';

interface HeaderProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Header = ({ toggleDrawer }: HeaderProps) => {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      py={{ xs: 2, lg: 3 }}
      width={1}
      bgcolor="primary.dark"
      position="sticky"
      top={0}
      zIndex={1200}
    >
      <Stack mx="auto" px={1.5} maxWidth={1420} alignItems="center" justifyContent="space-between">
        <ButtonBase
          component={Link}
          href="/"
          sx={{ display: { xs: 'none', md: 'flex' } }}
          disableRipple
        >
          <Typography
            variant="h3"
            color="primary.main"
            fontWeight={600}
            letterSpacing={1}
          >
            Grocery
          </Typography>
        </ButtonBase>

        <Stack
          ml={{ xs: 0, md: 5 }}
          mr={{ xs: 0, sm: 4 }}
          width={1}
          maxWidth={580}
          alignItems="center"
          justifyContent="center"
          bgcolor="secondary.darker"
          border={2}
          borderColor="primary.main"
          borderRadius={2.5}
          overflow="hidden"
          display={{ xs: 'none', sm: 'flex' }}
        >
          <FormControl
            variant="filled"
            sx={{ width: 240, display: { xs: 'none', md: 'block' }, bgcolor: 'transparent' }}
          >
            <Select
              name="category-select"
              value={category}
              sx={{ width: 170 }}
              onChange={handleCategoryChange}
              IconComponent={() => (
                <IconifyIcon icon="iconamoon:arrow-down-2-duotone" color="primary.lighter" />
              )}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="vegetables-fruits">Vegetable & Fruits</MenuItem>
              <MenuItem value="beverages">Beverages</MenuItem>
              <MenuItem value="household-items">Household Items</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="product-search"
            variant="filled"
            color="secondary"
            placeholder="Search products..."
            sx={{
              width: 1,
              '& .MuiInputBase-root': {
                border: 'none',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
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
