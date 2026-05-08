import type { Theme, Components } from "@mui/material/styles";

const IconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginLeft: 0,
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      background: "transparent !important",
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1),
      fontSize: theme.typography.h3.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      fontSize: theme.typography.h4.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5),
      fontSize: theme.typography.h5.fontSize,
    }),
  },
};

export default IconButton;
