import type { Theme, Components } from "@mui/material/styles";

const OutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
    }),
    input: {
      padding: 0,
    },
    sizeSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(1.25),
    }),
  },
};

export default OutlinedInput;
