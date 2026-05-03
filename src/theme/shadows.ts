declare module "@mui/material/styles" {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = [
  "2px 2px 20px 0px #27272735",
  "0px 0px 56px 0px #00260314",
  "0px 10px 20px 0px #00000003",
];

export default customShadows;
