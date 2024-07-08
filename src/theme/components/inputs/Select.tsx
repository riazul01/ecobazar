import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Select: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      border: 'none',
      '&.MuiInputBase-root': {
        backgroundColor: 'transparent !important',
      },
      '& .MuiBox-root': {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
      },
    }),
    select: ({ theme }) => ({
      padding: theme.spacing(0),
      paddingRight: '0 !important',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      backgroundColor: 'transparent !important',
    }),
  },
};

export default Select;
