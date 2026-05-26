import type { Theme, Components } from "@mui/material/styles";

const Card: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.25),
      //   backgroundColor: theme.palette.info.lighter,
      boxShadow: "none",
      borderRadius: 0,
    }),
  },
};

export default Card;
