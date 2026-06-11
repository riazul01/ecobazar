import type { Theme, Components } from "@mui/material/styles";
import { boxClasses, iconButtonClasses } from "@mui/material";

const InputAdornment: Components<Theme>["MuiInputAdornment"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // margin: "0 !important",
      // paddingRight: theme.spacing(0.75),
      color: theme.palette.text.disabled,
      fontSize: theme.typography.h4.fontSize,
      margin: "0 !important",
      padding: 0,

      [`& .${iconButtonClasses.root}`]: {
        margin: 0,
        padding: 0,
      },
      // "&.MuiInputAdornment-sizeSmall": {
      //   "& .MuiBox-root": {
      //     fontSize: theme.typography.body1.fontSize,
      //   },
      // },
    }),
    positionStart: ({ theme }) => ({
      paddingRight: theme.spacing(1),
    }),
    positionEnd: ({ theme }) => ({
      paddingRight: theme.spacing(0.25),
    }),
    sizeSmall: ({ theme }) => ({
      [`& .${boxClasses.root}`]: {
        fontSize: theme.typography.body1.fontSize,
      },
    }),
  },
};

export default InputAdornment;
