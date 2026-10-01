import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import {
  gridPageSelector,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
} from "@mui/x-data-grid";

const DataTableFooter = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowsCount = useGridSelector(apiRef, gridRowCountSelector);

  return (
    <Stack
      sx={{
        pl: 3,
        pr: 1.6,
        alignItems: "center",
        justifyContent: "space-between",
        width: 1,
      }}
    >
      <Typography
        variant="body2"
        color="text.primary"
      >{`${page * pageSize + 1}-${page * pageSize + pageSize} of ${rowsCount}`}</Typography>
      <Pagination
        size="small"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => {
          event.preventDefault();
          apiRef.current.setPage(value - 1);
        }}
      />
    </Stack>
  );
};

export default DataTableFooter;
