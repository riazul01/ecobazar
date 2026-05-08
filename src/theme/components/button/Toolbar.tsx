import type { Theme, Components } from "@mui/material/styles";

const Toolbar: Components<Theme>["MuiToolbar"] = {
  styleOverrides: {
    root: {
      padding: "0 !important",
    },
  },
};

export default Toolbar;
