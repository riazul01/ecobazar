import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.75, 1.25),
      color: theme.palette.primary.lighter,
      fontSize: theme.typography.body2.fontSize,
      borderRadius: theme.shape.borderRadius,
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        background: theme.palette.neutral.lighter,
      },
      '&.Mui-selected': {
        background: `${theme.palette.neutral.lighter} !important`,
      },
    }),
  },
};

export default MenuItem;
