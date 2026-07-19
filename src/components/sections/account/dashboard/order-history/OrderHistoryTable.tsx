import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import DataTableFooter from "components/common/DataTableFooter";
import ActionMenu from "components/sections/common/ActionMenu";
import { orderHistory } from "data/order-history";

const columns: GridColDef<(typeof orderHistory)[number]>[] = [
  {
    field: "id",
    headerName: "Order Id",
    editable: false,
    align: "left",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "date",
    headerName: "Date",
    editable: false,
    align: "left",
    flex: 1,
    minWidth: 180,
  },
  {
    field: "total",
    headerName: "Total",
    editable: false,
    align: "left",
    flex: 1,
    minWidth: 220,
    renderCell: (params) => (
      <Stack sx={{ height: 1, alignItems: "center", gap: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          ${params.value.price}
        </Typography>
        <Typography variant="body2">
          ({params.value.products} products)
        </Typography>
      </Stack>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    editable: false,
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      const color =
        params.value === "in progress"
          ? "info"
          : params.value === "completed"
            ? "success"
            : params.value === "pending"
              ? "warning"
              : "info";
      return (
        <Stack
          direction="column"
          sx={{ height: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Chip label={params.value} size="small" color={color} />
        </Stack>
      );
    },
  },
  {
    field: "method",
    headerName: "Method",
    headerAlign: "right",
    align: "right",
    editable: false,
    flex: 1,
    minWidth: 120,
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "right",
    align: "right",
    editable: false,
    sortable: false,
    flex: 1,
    minWidth: 120,
    // renderHeader: () => <ActionMenu />,
    renderCell: () => <ActionMenu />,
  },
];

// interface TaskOverviewTableProps {
//   searchText: string;
// }

const OrderHistoryTable = () => {
  //   const apiRef = useGridApiRef<GridApi>();

  //   useEffect(() => {
  //     apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  //   }, [searchText]);

  return (
    <DataGrid
      //   apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={orderHistory}
      rowHeight={50}
      columnHeaderHeight={36}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      slots={{
        pagination: DataTableFooter,
      }}
      pageSizeOptions={[5]}
    />
  );
};

export default OrderHistoryTable;
