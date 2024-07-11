declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['0px 8px 40px 0px #00260314', '0px 0px 12px 0px #20B52652'];

export default customShadows;
