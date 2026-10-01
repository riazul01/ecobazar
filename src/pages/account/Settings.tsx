import Stack from "@mui/material/Stack";
import AccountSettings from "components/sections/account/settings/AccountSettings";
import BillingAddress from "components/sections/account/settings/BillingAddress";
import ChangePassword from "components/sections/account/settings/ChangePassword";

const Settings = () => {
  return (
    <Stack direction="column" spacing={3} sx={{ width: 1 }}>
      <AccountSettings />
      <BillingAddress />
      <ChangePassword />
    </Stack>
  );
};

export default Settings;
