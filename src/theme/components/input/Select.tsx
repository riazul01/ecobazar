import type { Theme, Components } from "@mui/material/styles";
import {
  boxClasses,
  inputBaseClasses,
  outlinedInputClasses,
} from "@mui/material";
import ArrowDownIcon from "components/icons/ArrowDownIcon";

const Select: Components<Theme>["MuiSelect"] = {
  defaultProps: {
    IconComponent: ArrowDownIcon,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      border: "none",
      [`&.${inputBaseClasses.root}`]: {
        padding: 0,
        backgroundColor: "transparent !important",
      },
      [`& .${boxClasses.root}`]: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
      },
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        border: `1px solid ${theme.palette.divider} !important`,
      },
    }),
    select: ({ theme }) => ({
      padding: theme.spacing(1, 2),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      backgroundColor: "transparent !important",
    }),
  },
};

export default Select;
