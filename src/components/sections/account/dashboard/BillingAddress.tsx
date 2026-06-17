import { Box, Link, Typography } from "@mui/material";

const BillingAddress = () => {
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
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
        Dianne Russell
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        4140 Parker Rd. Allentown, New Mexico 31134
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        dainne.ressell@gmail.com
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        (671) 555-0110
      </Typography>
      <Link href="#!" sx={{ fontWeight: 500 }}>
        Edit Address
      </Link>
    </Box>
  );
};

export default BillingAddress;
