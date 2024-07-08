import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Card: Components<Omit<Theme, 'components'>>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.25),
      backgroundColor: theme.palette.info.lighter,
      boxShadow: 'none',
      borderRadius: 0,
    }),
  },
};

export default Card;
