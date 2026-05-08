import type { Theme, Components } from "@mui/material/styles";

const Badge: Components<Theme>["MuiBadge"] = {
  styleOverrides: {
    root: {},
    badge: ({ theme }) => ({
      top: 8,
      right: 4,
      border: 1,
      borderStyle: "solid",
      borderColor: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.common.white,
      padding: theme.spacing(0, 0.5),
      fontWeight: 400,
    }),
  },
};

export default Badge;
