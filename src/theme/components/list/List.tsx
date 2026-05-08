import type { Theme, Components } from "@mui/material/styles";

const List: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
    }),
  },
};

export default List;
