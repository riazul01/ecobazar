import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Select: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      border: 'none',
      '&.MuiInputBase-root': {
        background: 'transparent !important',
      },
      '& .MuiBox-root': {
        fontSize: theme.typography.h4.fontSize,
      },
    }),
    select: ({ theme }) => ({
      padding: theme.spacing(1.25, 2),
      paddingRight: '0 !important',
      background: 'transparent !important',
      color: theme.palette.primary.light,
      fontWeight: 500,
    }),
  },
};

export default Select;
