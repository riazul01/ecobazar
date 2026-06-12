import type { Theme, Components } from "@mui/material/styles";
import { inputBaseClasses } from "@mui/material";

const TextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${inputBaseClasses.root}`]: {
        padding: theme.spacing(1.25),
      },
    }),
  },
};

export default TextField;
