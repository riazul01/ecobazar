import type {} from "@mui/x-data-grid/themeAugmentation";
import { createTheme } from "@mui/material/styles";
import customShadows from "./shadows";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/utils/CssBaseline";

import Stack from "./components/layout/Stack";
import Paper from "./components/surface/Paper";

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
import TextField from "./components/input/TextField";
import Checkbox from "./components/input/Checkbox";
import Select from "./components/input/Select";
import Radio from "./components/input/Radio";
import Slider from "./components/input/Slider";

import Badge from "./components/data-display/Badge";
import Chip from "./components/data-display/Chip";

import Card from "./components/card/Card";
import CardMedia from "./components/card/CardMedia";
import CardHeader from "./components/card/CardHeader";
import CardContent from "./components/card/CardContent";
import CardActions from "./components/card/CardActions";

import Link from "./components/navigation/Link";
import Drawer from "./components/navigation/Drawer";
import PaginationItem from "./components/navigation/PaginationItem";
import DataGrid from "./components/data-grid/DataGrid";

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
    MuiPaper: Paper,
    MuiLink: Link,
    MuiDrawer: Drawer,

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
    MuiTextField: TextField,
    MuiCheckbox: Checkbox,
    MuiSelect: Select,
    MuiRadio: Radio,
    MuiSlider: Slider,

    MuiCard: Card,
    MuiCardMedia: CardMedia,
    MuiCardHeader: CardHeader,
    MuiCardContent: CardContent,
    MuiCardActions: CardActions,
    MuiDataGrid: DataGrid,

    MuiBadge: Badge,
    MuiChip: Chip,

    MuiPaginationItem: PaginationItem,
    MuiCssBaseline: CssBaseline,
  },
});
