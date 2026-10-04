import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OrderHistoryTable from "components/sections/account/order-history/OrderHIstoryTable";

const OrderHistory = () => {
  return (
    <Box
      sx={{
        width: 1,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" sx={{ px: 3, py: 2, fontWeight: 500 }}>
        Order History
      </Typography>
      <OrderHistoryTable />
    </Box>
  );
};

export default OrderHistory;
