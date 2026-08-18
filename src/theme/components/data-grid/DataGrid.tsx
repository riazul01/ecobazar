import type { Theme, Components } from "@mui/material";

const DataGrid: Components<Theme>["MuiDataGrid"] = {
  styleOverrides: {
    root: () => ({
      border: "none",
      borderRadius: 0,
      "--DataGrid-rowBorderColor": "transparent",
      "& .MuiDataGrid-scrollbar--vertical": {
        visibility: "hidden",
      },
      "& .MuiDataGrid-scrollbarFiller": {
        minWidth: 0,
      },
    }),
    row: {
      "&:hover": { backgroundColor: "transparent" },
    },
    cell: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
      "&:nth-of-type(2)": {
        paddingLeft: theme.spacing(3),
      },
      "&:nth-last-of-type(2)": {
        paddingRight: theme.spacing(3),
      },
      "&:focus-within": {
        outline: "none !important",
      },
    }),
    columnHeaderCheckbox: () => ({
      padding: "0px !important",
    }),
    cellCheckbox: () => ({
      padding: "0px !important",
    }),
    columnHeader: ({ theme }) => ({
      background: theme.palette.grey[50],
      "&:nth-child(2)": {
        paddingLeft: theme.spacing(3),
      },
      "&:nth-last-of-type(3)": {
        paddingRight: theme.spacing(3),
      },
      "&:focus-within": {
        outline: "none !important",
      },
    }),
    columnHeaderTitle: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 500,
    }),
    columnSeparator: {
      display: "none",
    },
    iconButtonContainer: () => ({
      "& .MuiIconButton-root": {
        backgroundColor: "transparent !important",
        border: "none",
      },
    }),
    footerContainer: ({ theme }) => ({
      borderColor: `${theme.palette.divider} !important`,
    }),
  },
};

export default DataGrid;
