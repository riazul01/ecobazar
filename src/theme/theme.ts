import { createTheme } from "@mui/material/styles";
import customShadows from "./shadows";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/utils/CssBaseline";
import Stack from "./components/layout/Stack";

import Button from "./components/button/Button";
import ButtonBase from "./components/button/ButtonBase";
import IconButton from "./components/button/IconButton";
import Toolbar from "./components/button/Toolbar";

import List from "./components/list/List";
import ListItemIcon from "./components/list/ListItemIcon";
import ListItemText from "./components/list/ListItemText";
import ListItemButton from "./components/list/ListItemButton";
import Collapse from "./components/list/Collapse";
import MenuItem from "./components/list/MenuItem";

import InputBase from "./components/input/InputBase";
import FilledInput from "./components/input/FilledInput";
import OutlinedInput from "./components/input/OutlinedInput";
import InputAdornment from "./components/input/InputAdornment";
import FormControlLabel from "./components/input/FormControlLabel";
import Checkbox from "./components/input/Checkbox";
import Select from "./components/input/Select";

import Link from "./components/navigation/Link";

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          display1: "h1",
          display2: "h1",
          display3: "h1",
        },
      },
    },
    MuiStack: Stack,
    MuiLink: Link,

    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiList: List,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiListItemButton: ListItemButton,
    MuiCollapse: Collapse,
    MuiMenuItem: MenuItem,

    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputAdornment: InputAdornment,
    MuiFormControlLabel: FormControlLabel,
    MuiCheckbox: Checkbox,
    MuiSelect: Select,

    MuiCssBaseline: CssBaseline,
  },
});
