import type { Theme, Components } from "@mui/material/styles";

const Button: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 500,
      textTransform: "initial",
      border: "none !important",
      borderRadius: Number(theme.shape.borderRadius) * 12,
    }),
    text: ({ theme }) => ({
      color: theme.palette.primary.main,
      background: "transparent !important",
    }),
    contained: ({ theme }) => ({
      "&.MuiButton-colorPrimary": {
        color: theme.palette.common.white,
        background: theme.palette.primary.main,
      },
      "&.MuiButton-colorSecondary": {
        color: theme.palette.primary.main,
        background: theme.palette.common.white,
      },
    }),
    outlined: ({ theme }) => ({
      "&.MuiButton-colorPrimary": {
        color: theme.palette.primary.main,
        border: `1.5px solid ${theme.palette.primary.main} !important`,
      },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.5, 3.5),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1, 3),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 2.5),
      fontSize: theme.typography.caption.fontSize,
    }),
    startIcon: {
      marginRight: 5,
    },
    endIcon: {
      marginLeft: 12,
    },
  },
};

export default Button;
