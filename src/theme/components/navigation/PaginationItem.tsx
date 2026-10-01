import type { Theme, Components } from "@mui/material/styles";

const PaginationItem: Components<Theme>["MuiPaginationItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 36,
      minWidth: 36,
      borderRadius: "50%",
      "&.Mui-selected": {
        color: "white",
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    }),
    sizeSmall: {
      height: 30,
      minWidth: 30,
    },
  },
};

export default PaginationItem;
