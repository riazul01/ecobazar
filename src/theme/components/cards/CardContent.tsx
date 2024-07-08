import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardContent: Components<Omit<Theme, 'components'>>['MuiCardContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1.5, 0.5, 2, 0.5),
    }),
  },
};

export default CardContent;
