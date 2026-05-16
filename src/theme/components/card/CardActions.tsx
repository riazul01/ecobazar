import type { Theme, Components } from "@mui/material/styles";

const CardActions: Components<Theme>["MuiCardActions"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1),
    }),
  },
};

export default CardActions;
