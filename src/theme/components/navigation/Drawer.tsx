import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: {},
    paper: ({ theme }) => ({
      padding: 0,
      width: '300px',
      height: '100vh',
      border: 0,
      borderRadius: 0,
      backgroundColor: theme.palette.primary.dark,
      boxSizing: 'border-box',
      '&:hover': {
        '&::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
    }),
  },
};

export default Drawer;
