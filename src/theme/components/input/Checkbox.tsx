import { boxClasses } from "@mui/material";
import type { Theme, Components } from "@mui/material/styles";
import Iconify from "components/base/Iconify";

const Checkbox: Components<Theme>["MuiCheckbox"] = {
  defaultProps: {
    icon: <Iconify icon="fluent:checkbox-unchecked-16-regular" />,
    checkedIcon: <Iconify icon="fluent:checkbox-checked-16-filled" />,
    indeterminateIcon: (
      <Iconify icon="fluent:checkbox-indeterminate-16-regular" />
    ),
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      color: theme.palette.divider,
    }),
    sizeMedium: ({ theme }) => ({
      [`& .${boxClasses.root}`]: {
        fontSize: theme.typography.h4.fontSize,
      },
    }),
    sizeSmall: ({ theme }) => ({
      [`& .${boxClasses.root}`]: {
        fontSize: theme.typography.h5.fontSize,
      },
    }),
  },
};

export default Checkbox;
