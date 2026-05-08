import type { Theme, Components } from "@mui/material/styles";

const MenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.75, 1.25),
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 500,
      transition: theme.transitions.create("all", {
        duration: 300,
        easing: "ease-in-out",
      }),
      "&:hover": { backgroundColor: theme.palette.grey[100] },
    }),
  },
};

export default MenuItem;
