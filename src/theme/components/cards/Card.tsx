import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Card: Components<Omit<Theme, 'components'>>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      borderRadius: 0,
      boxShadow: 'none',
      backgroundColor: theme.palette.info.lighter,
    }),
  },
};

export default Card;
