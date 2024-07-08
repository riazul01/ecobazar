import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { gray, green, red, yellow, white } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    lighter: gray[100],
    main: gray[100],
  },
  primary: {
    light: green[100],
    main: green[500],
    dark: green[800],
  },
  secondary: {
    light: gray[100],
    main: gray[100],
    dark: gray[100],
  },
  info: {
    lighter: white[100],
    light: white[200],
    main: white[300],
    dark: gray[800],
    darker: gray[900],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: yellow[500],
  },
  error: {
    main: red[500],
  },
  text: {
    primary: gray[900],
    secondary: gray[600],
    disabled: gray[400],
  },
};

export default palette;
