import type {
  CSSProperties,
  TypographyVariantsOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display1: CSSProperties;
    display2: CSSProperties;
    display3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: CSSProperties;
    display2?: CSSProperties;
    display3?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
  }
}

export const fontFamily = {
  poppins: ["Poppins", "sans-serif"].join(","),
};

const typography: TypographyVariantsOptions = {
  fontFamily: fontFamily.poppins,
  display1: {
    fontSize: "4rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  display2: {
    fontSize: "3.5rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  display3: {
    fontSize: "3rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h1: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },
};

export default typography;
