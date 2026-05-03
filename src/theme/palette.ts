import type { PaletteOptions } from "@mui/material/styles";
import { grey, green, blue, red, orange } from "./colors";

const palette: PaletteOptions = {
  grey,
  primary: {
    main: green[500],
  },
  info: {
    main: blue[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: orange[500],
  },
  error: {
    main: red[500],
  },
  divider: grey[200],
  text: {
    primary: grey[950],
    secondary: grey[700],
    disabled: grey[500],
  },
};

export default palette;
