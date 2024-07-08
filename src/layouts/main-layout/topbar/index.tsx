import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconifyIcon from 'components/base/IconifyIcon';
import LanguageSelect from './LanguageSelect';

const Topbar = () => {
  const [currency, setCurrency] = useState('usd');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <Box pt={1} width={1} zIndex={1200}>
      <Stack mx="auto" px={1.5} maxWidth={1420} alignItems="center" justifyContent="space-between">
        <Stack alignItems="center" spacing={1.5}>
          <LanguageSelect />

          <FormControl variant="filled" sx={{ width: 60 }}>
            <Select
              name="currency-select"
              value={currency}
              onChange={handleSelectChange}
              sx={{
                '& .MuiSelect-select': { mt: 0.5, p: '0 !important' },
              }}
              IconComponent={() => (
                <IconifyIcon icon="iconamoon:arrow-down-2-duotone" color="primary.lighter" />
              )}
            >
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="bdt">BDT</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Typography
          variant="subtitle1"
          component="p"
          letterSpacing={0.5}
          color="primary.lighter"
          display={{ xs: 'none', md: 'block' }}
          ml={{ xs: 0, lg: 10 }}
        >
          Get{' '}
          <Typography color="primary.main" component="span" fontWeight={600}>
            30% off
          </Typography>{' '}
          for first order with exciting gift box!{' '}
          <Link href="#!" sx={{ textDecoration: 'underline' }}>
            Learn more
          </Link>
        </Typography>

        <Stack spacing={1.5}>
          <Link href="#!" color="primary.lighter" fontSize="subtitle1.fontSize">
            Login
          </Link>
          <Typography color="primary.lighter">|</Typography>
          <Link href="#!" color="primary.lighter" fontSize="subtitle1.fontSize">
            Register
          </Link>
          <Typography color="primary.lighter" display={{ xs: 'none', sm: 'block' }}>
            |
          </Typography>
          <Link
            href="#!"
            color="primary.lighter"
            fontSize="subtitle1.fontSize"
            display={{ xs: 'none', sm: 'block' }}
          >
            About Us
          </Link>
          <Typography color="primary.lighter" display={{ xs: 'none', sm: 'block' }}>
            |
          </Typography>
          <Link
            href="#!"
            color="primary.lighter"
            fontSize="subtitle1.fontSize"
            display={{ xs: 'none', sm: 'block' }}
          >
            Help
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topbar;
