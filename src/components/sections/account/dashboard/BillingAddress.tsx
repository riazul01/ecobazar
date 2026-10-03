import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useAuth } from "providers/AuthProvider";
import { accountPaths } from "routes/paths";

const BillingAddress = () => {
  const { profile, user } = useAuth();
  const address = profile?.billingAddress;

  const fullName = address
    ? `${address.firstName} ${address.lastName}`.trim()
    : profile?.displayName ||
      (profile?.firstName
        ? `${profile.firstName} ${profile.lastName || ""}`.trim()
        : user?.displayName || user?.email || "");

  const fullStreet = address
    ? `${address.streetAddress}, ${address.state} ${address.zipCode}, ${address.country}`
    : "No billing address added yet";

  const email = address?.email || profile?.email || user?.email || "";
  const phone = address?.phone || profile?.phone || "";

  return (
    <Box
      sx={{
        p: 4,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
        height: 1,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ mb: 2.25, color: "text.disabled", textTransform: "uppercase" }}
      >
        Billing Address
      </Typography>
      {fullName && (
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
          {fullName}
        </Typography>
      )}
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {fullStreet}
      </Typography>
      {email && (
        <Typography variant="body1" sx={{ mb: 1 }}>
          {email}
        </Typography>
      )}
      {phone && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          {phone}
        </Typography>
      )}
      <Link href={accountPaths.settings} sx={{ fontWeight: 500 }}>
        {address ? "Edit Address" : "Add Address"}
      </Link>
    </Box>
  );
};

export default BillingAddress;
