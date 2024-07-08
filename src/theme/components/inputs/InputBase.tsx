import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 2,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      background: `${theme.palette.primary.dark} !important`,
      fontSize: theme.typography.subtitle1.fontSize,
      color: theme.palette.primary.lighter,
      padding: theme.spacing(1.25),
      letterSpacing: 0.5,

      '& input::placeholder': {
        color: theme.palette.primary.lighter,
        opacity: 1,
      },
      '&:before, &:after': {
        display: 'none',
      },
    }),
    colorSecondary: ({ theme }) => ({
      background: `${theme.palette.primary.darker} !important`,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default InputBase;
