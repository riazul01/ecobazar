import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: 0,
      fontWeight: 500,
      color: theme.palette.info.lighter,
      borderRadius: theme.shape.borderRadius * 1.5,
    }),
    sizeMedium: ({ theme }) => ({
      height: 35,
      padding: theme.spacing(0, 1.75),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      height: 24,
      padding: theme.spacing(0, 1.5),
      fontSize: theme.typography.body2.fontSize,
    }),
    colorPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
    }),
    colorSuccess: ({ theme }) => ({
      backgroundColor: theme.palette.success.main,
    }),
    colorWarning: ({ theme }) => ({
      backgroundColor: theme.palette.warning.main,
    }),
    colorError: ({ theme }) => ({
      backgroundColor: theme.palette.error.main,
    }),
    iconSmall: {
      width: 12,
      margin: '0 !important',
    },
    iconMedium: {
      width: 16,
      margin: '0 !important',
    },
    labelSmall: {
      padding: 0,
      textTransform: 'capitalize',
    },
    labelMedium: {
      padding: 0,
      textTransform: 'capitalize',
    },
  },
};

export default Chip;
