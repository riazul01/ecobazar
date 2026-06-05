import type { Theme, Components } from "@mui/material/styles";

const PaginationItem: Components<Theme>["MuiPaginationItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 36,
      minWidth: 36,
      borderRadius: "18px",
      "&.Mui-selected": {
        color: "white",
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    }),
  },
};

export default PaginationItem;
