import type { Theme, Components } from "@mui/material/styles";

const InputAdornment: Components<Theme>["MuiInputAdornment"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: "0 !important",
      paddingRight: theme.spacing(0.75),
      fontSize: theme.typography.h4.fontSize,
      color: theme.palette.text.disabled,

      "&.MuiInputAdornment-sizeSmall": {
        "& .MuiBox-root": {
          fontSize: theme.typography.body1.fontSize,
        },
      },
    }),
  },
};

export default InputAdornment;
