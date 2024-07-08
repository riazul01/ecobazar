import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: theme.palette.info.dark,

      '&.MuiDivider-withChildren': {
        background: 'transparent',
        '&::before': {
          background: theme.palette.info.dark,
        },
        '&::after': {
          background: theme.palette.info.dark,
        },
      },
    }),
  },
};

export default Divider;