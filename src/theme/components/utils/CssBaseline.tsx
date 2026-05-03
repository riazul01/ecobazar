import type { Theme, Components } from "@mui/material/styles";

const CssBaseline: Components<Theme>["MuiCssBaseline"] = {
  defaultProps: {},
  styleOverrides: {
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      fontVariantLigatures: "none",
    },
  },
};

export default CssBaseline;
