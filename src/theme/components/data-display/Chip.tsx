import type { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    subtle: true;
  }
}

const Chip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: {},
    colorPrimary: ({ theme }) => ({
      background: theme.palette.primary.main,
    }),
    colorSecondary: ({ theme }) => ({
      background: theme.palette.grey[900],
    }),
    label: {
      padding: "0px 16px",
      color: "white",
      fontWeight: 500,
    },
  },
  variants: [
    {
      props: { variant: "subtle" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.grey[200],

        "& .MuiChip-label": {
          color: theme.palette.text.primary,
        },
      }),
    },
  ],
};

export default Chip;
