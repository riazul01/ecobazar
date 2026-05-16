import type { Theme, Components } from "@mui/material/styles";

const CardHeader: Components<Theme>["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      paddingBottom: theme.spacing(2),
    }),
    title: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
    }),
    action: ({ theme }) => ({
      "& .MuiIconButton-root": {
        padding: theme.spacing(0.75),
        border: "none",
        "&:hover": {
          //   background: theme.palette.info.lighter,
        },
      },
    }),
  },
};

export default CardHeader;
