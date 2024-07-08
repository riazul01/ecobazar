import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1, 1.5),
      color: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius * 2,
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
  },
};

export default ListItemButton;
