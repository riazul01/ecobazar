import type { Theme, Components } from "@mui/material/styles";

const Chip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: {},
    colorSecondary: ({ theme }) => ({
      background: theme.palette.grey[900],
    }),
    label: {
      padding: "0px 16px",
      color: "white",
      fontWeight: 500,
    },
  },
};

export default Chip;
