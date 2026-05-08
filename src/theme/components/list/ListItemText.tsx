import type { Theme, Components } from "@mui/material/styles";

const ListItemText: Components<Theme>["MuiListItemText"] = {
  styleOverrides: {
    root: {},
    primary: ({ theme }) => ({
      marginTop: theme.spacing(0.15),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
    }),
  },
};

export default ListItemText;
