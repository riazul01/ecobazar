import Stack from "@mui/material/Stack";
import AccountSettings from "components/sections/account/settings/AccountSettings";
import BillingAddress from "components/sections/account/settings/BillingAddress";

const Settings = () => {
  return (
    <Stack direction="column" sx={{ gap: 3, p: 3, width: 1 }}>
      <AccountSettings />
      <BillingAddress />
    </Stack>
  );
};

export default Settings;
