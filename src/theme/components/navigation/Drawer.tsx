import type { Theme, Components } from "@mui/material/styles";
import { drawerClasses } from "@mui/material/Drawer";

const Drawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    root: {
      flexShrink: 0,
      overflowX: "hidden",
      whiteSpace: "nowrap",

      [`& .${drawerClasses.paper}`]: {
        height: "100vh",
        boxSizing: "border-box",
        borderRadius: 0,
      },
    },
  },
};

export default Drawer;
