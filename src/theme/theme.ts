import { createTheme } from "@mui/material/styles";
import customShadows from "./shadows";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/utils/CssBaseline";

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
    MuiCssBaseline: CssBaseline,
  },
});
