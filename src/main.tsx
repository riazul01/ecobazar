import React from 'react';
import ReactDOM from 'react-dom/client';
import router from 'routes/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from 'theme/theme.ts';
import CartContextProvider from 'context/CartContextProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </CartContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
