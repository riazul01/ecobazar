import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Badge: Components<Omit<Theme, 'components'>>['MuiBadge'] = {
  styleOverrides: {
    root: {},
    badge: ({ theme }) => ({
      top: 3,
      right: 3,
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.lighter,
      backgroundColor: theme.palette.primary.dark,
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.info.lighter,
      padding: theme.spacing(0, 0.5),
      fontWeight: 400,
    }),
  },
};

export default Badge;
