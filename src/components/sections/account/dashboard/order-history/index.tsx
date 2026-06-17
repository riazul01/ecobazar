import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import OrderHistoryTable from "./OrderHistoryTable";

const OrderHistory = () => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" sx={{ px: 3, py: 2, fontWeight: 500 }}>
        Recent Order Histroy
      </Typography>
      <OrderHistoryTable />
    </Box>
  );
};

export default OrderHistory;
