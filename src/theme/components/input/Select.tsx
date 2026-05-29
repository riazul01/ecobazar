import type { Theme, Components } from "@mui/material/styles";
import ArrowDownIcon from "components/icons/ArrowDownIcon";

const Select: Components<Theme>["MuiSelect"] = {
  defaultProps: {
    IconComponent: ArrowDownIcon,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      border: "none",
      padding: theme.spacing(1, 2),
      "&.MuiInputBase-root": {
        backgroundColor: "transparent !important",
      },
      "& .MuiBox-root": {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.divider} !important`,
      }
    }),
    select: ({ theme }) => ({
      padding: 0,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      backgroundColor: "transparent !important",
    }),
  },
};

export default Select;
