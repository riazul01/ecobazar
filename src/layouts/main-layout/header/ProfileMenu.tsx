import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
  path: string;
}

const menuItems: MenuItems[] = [
  {
    id: 1,
    title: 'View Profile',
    icon: 'mingcute:user-1-line',
    path: '#!',
  },
  {
    id: 2,
    title: 'Update Profile',
    icon: 'mingcute:user-follow-line',
    path: '#!',
  },
  {
    id: 3,
    title: 'My Orders',
    icon: 'mingcute:list-check-3-fill',
    path: '#!',
  },
  {
    id: 4,
    title: 'Track Orders',
    icon: 'mingcute:live-location-line',
    path: '#!',
  },
  {
    id: 5,
    title: 'Logout',
    icon: 'material-symbols:logout-rounded',
    path: '#!',
  },
];

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Profile">
        <IconButton
          size="large"
          onClick={handleProfileClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
        >
          <IconifyIcon icon="mingcute:user-1-line" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            p: '0 !important',
            width: 220,
            overflow: 'hidden',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuItems.map((item) => {
          return (
            <MenuItem
              component={Link}
              href={item.path}
              key={item.id}
              onClick={handleProfileMenuClose}
            >
              <ListItemIcon sx={{ mr: 1 }}>
                <IconifyIcon icon={item.icon} />
              </ListItemIcon>
              <ListItemText color="primary.lighter">
                <Typography>{item.title}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ProfileMenu;
