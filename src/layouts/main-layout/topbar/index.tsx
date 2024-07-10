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

  const handleCurrencyChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <Box width={1} borderBottom={1} borderColor="info.main" zIndex={1200}>
      <Stack
        mx="auto"
        px={1.5}
        py={0.5}
        maxWidth={1332}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={0.5} alignItems="center" display={{ xs: 'none', md: 'flex' }}>
          <IconifyIcon
            icon="fluent:location-28-regular"
            color="text.secondary"
            fontSize="h6.fontSize"
          />
          <Typography variant="body2" color="text.secondary">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </Typography>
        </Stack>

        <Stack
          spacing={2.5}
          alignItems="center"
          width={{ xs: 1, md: 'auto' }}
          justifyContent={{ xs: 'space-between', md: 'flex-end' }}
        >
          <Stack spacing={2} alignItems="center" mr={-1.5}>
            <LanguageSelect />

            <FormControl variant="filled" sx={{ width: 60 }}>
              <Select
                name="currency"
                value={currency}
                onChange={handleCurrencyChange}
                IconComponent={() => <IconifyIcon icon="iconamoon:arrow-down-2-light" />}
                sx={{ '& .MuiSelect-select': { width: 32 } }}
              >
                <MenuItem value="usd">USD</MenuItem>
                <MenuItem value="bdt">BDT</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Typography
            color="neutral.lighter"
            fontSize="body2.fontSize"
            display={{ xs: 'none', md: 'flex' }}
          >
            |
          </Typography>

          <Stack spacing={0.5}>
            <Link href="#!" color="text.secondary" fontSize="body2.fontSize">
              Sing In
            </Link>
            <Typography color="text.secondary" fontSize="body2.fontSize">
              /
            </Typography>
            <Link href="#!" color="text.secondary" fontSize="body2.fontSize">
              Signup
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topbar;
