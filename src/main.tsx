import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import BreakpointProvider from "providers/BreakpointProvider";
import CartProvider from "providers/CartProvider";
import WishlistProvider from "providers/WishlistProvider";
import AuthProvider from "providers/AuthProvider";
import { theme } from "theme/theme.ts";
import router from "routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <CssBaseline />
              <RouterProvider router={router} />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </BreakpointProvider>
    </ThemeProvider>
  </StrictMode>,
);
