import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

interface Location {
  id: number;
  state: string;
}

const locations: Location[] = [
  { id: 1, state: 'New York' },
  { id: 2, state: 'Texas' },
  { id: 3, state: 'California' },
  { id: 4, state: 'Florida' },
  { id: 5, state: 'Illinois' },
];

const LocationSelect = () => {
  const [location, setLocation] = useState(locations[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLocationItemClick = (locationItem: Location) => {
    setLocation(locationItem);
    handleMenuClose();
  };

  return (
    <>
      <Tooltip title={location.state}>
        <ButtonBase disableRipple>
          <Stack
            alignItems="center"
            spacing={1}
            onClick={handleButtonClick}
            minWidth={170}
            sx={{ cursor: 'pointer' }}
          >
            <IconifyIcon
              icon="flowbite:map-pin-alt-outline"
              color="primary.main"
              fontSize="h3.fontSize"
            />
            <Stack direction="column" alignItems="flex-start">
              <Typography variant="caption" color="primary.lighter">
                Choose Location
              </Typography>
              <Typography variant="h6" color="primary.main" fontWeight={500}>
                {location.state}
              </Typography>
            </Stack>
          </Stack>
        </ButtonBase>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            p: '0 !important',
            width: 180,
            overflow: 'hidden',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {locations.map((locationItem) => {
          return (
            <MenuItem
              key={locationItem.id}
              onClick={() => handleLocationItemClick(locationItem)}
              sx={{ bgcolor: locationItem.id === location.id ? 'primary.darker' : null }}
            >
              <ListItemText>
                <Typography>{locationItem.state}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LocationSelect;
