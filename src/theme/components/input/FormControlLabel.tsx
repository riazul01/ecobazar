import type { Theme, Components } from "@mui/material/styles";

const FormControlLabel: Components<Theme>["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    label: ({ theme }) => ({
      marginLeft: 4,
      letterSpacing: 0.25,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      userSelect: "none",
    }),
  },
};

export default FormControlLabel;
