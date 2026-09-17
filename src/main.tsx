import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import BreakpointProvider from "providers/BreakpointProvider";
import CartProvider from "providers/CartProvider";
import { theme } from "theme/theme.ts";
import router from "routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <CartProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </CartProvider>
      </BreakpointProvider>
    </ThemeProvider>
  </StrictMode>,
);
