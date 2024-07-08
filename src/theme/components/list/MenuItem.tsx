import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.875, 1.25),
      color: theme.palette.primary.lighter,
      borderRadius: theme.shape.borderRadius * 2,
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        background: theme.palette.primary.dark,
      },
      '&.Mui-selected': {
        background: `${theme.palette.primary.dark} !important`,
      },
    }),
  },
};

export default MenuItem;
