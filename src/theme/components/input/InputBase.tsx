import type { Theme, Components } from "@mui/material/styles";

const InputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
      backgroundColor: `${theme.palette.common.white} !important`,
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
      padding: theme.spacing(1.25),

      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
      "& input::placeholder": {
        color: theme.palette.text.disabled,
        opacity: 1,
      },
      "&:before, &:after": {
        display: "none",
      },
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default InputBase;
