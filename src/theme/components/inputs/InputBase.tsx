import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.main,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: `${theme.palette.info.lighter} !important`,
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
      padding: theme.spacing(1.25),
      letterSpacing: 0.5,

      '& input::placeholder': {
        color: theme.palette.neutral.main,
        opacity: 1,
      },
      '&:before, &:after': {
        display: 'none',
      },
    }),
    colorSecondary: ({ theme }) => ({
      backgroundColor: `${theme.palette.info.main} !important`,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default InputBase;
