import type { Theme, Components } from "@mui/material/styles";

const ListItemButton: Components<Theme>["MuiListItemButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.75, 2),
      borderRadius: Number(theme.shape.borderRadius) * 2,
      "&:hover": { background: theme.palette.grey[100] },
    }),
  },
};

export default ListItemButton;
