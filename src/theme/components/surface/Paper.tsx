import { listClasses, menuClasses } from "@mui/material";
import type { Theme, Components } from "@mui/material/styles";

const Paper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      borderRadius: Number(theme.shape.borderRadius) * 2.5,
      overflow: "hidden",
      boxShadow: "none",

      [`&.${menuClasses.paper}`]: {
        padding: 0,
        borderRadius: Number(theme.shape.borderRadius) * 1.5,
        boxShadow: theme.customShadows[0],

        [`& .${listClasses.root}`]: {
          padding: theme.spacing(1),
        },
      },
    }),
  },
};

export default Paper;
