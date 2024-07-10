import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      background: theme.palette.info.lighter,
      borderRadius: theme.shape.borderRadius * 2.5,
      overflow: 'hidden',
      boxShadow: 'none',

      '&.MuiMenu-paper': {
        padding: '0 !important',
        background: theme.palette.info.lighter,
        boxShadow: theme.customShadows[0],

        '& .MuiList-root': {
          padding: theme.spacing(1),
        },
      },
    }),
  },
};

export default Paper;
