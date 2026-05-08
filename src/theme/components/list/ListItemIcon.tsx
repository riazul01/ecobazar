import type { Theme, Components } from "@mui/material/styles";

const ListItemIcon: Components<Theme>["MuiListItemIcon"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: "unset !important",
      marginRight: theme.spacing(1.25),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h5.fontSize,
    }),
  },
};

export default ListItemIcon;
