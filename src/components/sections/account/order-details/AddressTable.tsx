import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

interface Address {
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface AddressTableProps {
  billing: Address;
  shipping: Address;
}

const AddressTable = ({ billing, shipping }: AddressTableProps) => {
  const renderAddress = (address: Address) => (
    <Box sx={{ py: 1 }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
        {address.name}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          maxWidth: 280,
          lineHeight: 1.6,
          color: "text.secondary",
          mb: 4,
        }}
      >
        {address.address}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          textTransform: "uppercase",
          color: "text.disabled",
          letterSpacing: 0.6,
          fontWeight: 500,
        }}
      >
        Email
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {address.email}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          textTransform: "uppercase",
          color: "text.disabled",
          letterSpacing: 0.6,
          fontWeight: 500,
        }}
      >
        Phone
      </Typography>

      <Typography variant="body1">{address.phone}</Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        mb: 3,
      }}
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            px: 2.5,
            py: 2.25,
            textTransform: "uppercase",
            color: "text.disabled",
            letterSpacing: 0.8,
            flex: 1,
          }}
        >
          Billing Address
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            px: 2.5,
            py: 2.25,
            textTransform: "uppercase",
            color: "text.disabled",
            letterSpacing: 0.8,
            flex: 1,
          }}
        >
          Shipping Address
        </Typography>
      </Stack>

      <Stack divider={<Divider orientation="vertical" flexItem />}>
        <Box
          sx={{
            px: 2.5,
            py: 1.75,
            verticalAlign: "top",
            flex: 1,
          }}
        >
          {renderAddress(billing)}
        </Box>

        <Box
          sx={{
            px: 2.5,
            py: 1.75,
            verticalAlign: "top",
            flex: 1,
          }}
        >
          {renderAddress(shipping)}
        </Box>
      </Stack>
    </Box>
  );
};

export default AddressTable;
