import Grid from "@mui/material/Grid";
import BillingAddress from "components/sections/account/dashboard/BillingAddress";
import OrderHistory from "components/sections/account/dashboard/order-history";
import Profile from "components/sections/account/dashboard/Profile";

const Dashboard = () => {
  return (
    <Grid container spacing={3} sx={{ width: 1 }}>
      <Grid size={6}>
        <Profile />
      </Grid>
      <Grid size={6}>
        <BillingAddress />
      </Grid>
      <Grid size={12}>
        <OrderHistory />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
