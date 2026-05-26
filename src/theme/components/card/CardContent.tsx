import type { Theme, Components } from "@mui/material/styles";

const CardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1.5, 0.5, 2, 0.5),
    }),
  },
};

export default CardContent;
