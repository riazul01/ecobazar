import type { Theme, Components } from "@mui/material/styles";

const Slider: Components<Theme>["MuiSlider"] = {
  styleOverrides: {
    rail: ({ theme }) => ({
      color: theme.palette.grey[300],
      height: 6,
    }),
    thumb: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      border: "2px solid currentColor",
    }),
    valueLabel: ({ theme }) => ({
      backgroundColor: theme.palette.grey[900],
    }),
  },
};

export default Slider;
