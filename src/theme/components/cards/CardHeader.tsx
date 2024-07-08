import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardHeader: Components<Omit<Theme, 'components'>>['MuiCardHeader'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      paddingBottom: theme.spacing(2),
    }),
    title: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
    }),
    action: ({ theme }) => ({
      '& .MuiIconButton-root': {
        padding: theme.spacing(0.75),
        border: 'none',
        '&:hover': {
          background: theme.palette.info.lighter,
        },
      },
    }),
  },
};

export default CardHeader;
