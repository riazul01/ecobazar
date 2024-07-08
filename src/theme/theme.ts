import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import Stack from './components/layout/Stack';
import Drawer from './components/navigation/Drawer';
import Paper from './components/surfaces/Paper';
import Link from './components/navigation/Link';
import CssBaseline from './components/utils/CssBaseline';
import ButtonBase from './components/button/ButtonBase';
import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import Collapse from './components/list/Collapse';
import FilledInput from './components/inputs/FilledInput';
import InputBase from './components/inputs/InputBase';
import InputAdornment from './components/inputs/InputAdornment';
import IconButton from './components/button/IconButton';
import Button from './components/button/Button';
import Toolbar from './components/button/Toolbar';
import OutlinedInput from './components/inputs/OutlinedInput';
import ListItemIcon from './components/list/ListItemIcon';
import Select from './components/inputs/Select';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';
import Divider from './components/data-display/Divider';
import Card from './components/cards/Card';
import CardActions from './components/cards/CardActions';
import CardContent from './components/cards/CardContent';
import CardHeader from './components/cards/CardHeader';
import CardMedia from './components/cards/CardMedia';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiStack: Stack,
    MuiDrawer: Drawer,
    MuiPaper: Paper,
    MuiLink: Link,
    MuiList: List,
    MuiCollapse: Collapse,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputBase: InputBase,
    MuiInputAdornment: InputAdornment,
    MuiSelect: Select,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiDivider: Divider,
    MuiMenuItem: MenuItem,
    MuiButton: Button,
    MuiToolbar: Toolbar,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiCard: Card,
    MuiCardActions: CardActions,
    MuiCardContent: CardContent,
    MuiCardHeader: CardHeader,
    MuiCardMedia: CardMedia,
    MuiCssBaseline: CssBaseline,
  },
});
