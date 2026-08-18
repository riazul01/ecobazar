import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import AddressSection from "components/sections/account/order-details/AddressTable";
import OrderItemsTable from "components/sections/account/order-details/OrderItemsTable";
import OrderSummary from "components/sections/account/order-details/OrderSummary";
import OrderTracking from "components/sections/account/order-details/OrderTracking";
import { useParams } from "react-router";

const items = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Red Capsicum",
    price: 14,
    quantity: 5,
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Green Capsicum",
    price: 14,
    quantity: 2,
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Green Chili",
    price: 26.7,
    quantity: 10,
  },
];

const steps = [
  {
    id: 1,
    label: "Order received",
  },
  {
    id: 2,
    label: "Processing",
  },
  {
    id: 3,
    label: "On the way",
  },
  {
    id: 4,
    label: "Delivered",
  },
];

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        width: 1,
      }}
    >
      <Stack
        spacing={0.25}
        sx={{
          px: 3,
          py: 2,
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Order Details
        </Typography>
        <Iconify
          icon="mdi:dot"
          sx={{ fontSize: 20, color: "text.secondary" }}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          April 24, 2026
        </Typography>
        <Iconify
          icon="mdi:dot"
          sx={{ fontSize: 20, color: "text.secondary" }}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          3 Products
        </Typography>

        <Button sx={{ ml: "auto", px: 0 }} disableRipple>
          Back to List
        </Button>
      </Stack>
      <Box sx={{ p: 3 }}>
        <AddressSection
          billing={{
            name: "Dainne Russell",
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainne.ressell@gmail.com",
            phone: "(671) 555-0110",
          }}
          shipping={{
            name: "Dainne Russell",
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainne.ressell@gmail.com",
            phone: "(671) 555-0110",
          }}
        />

        <OrderSummary
          orderId="#4152"
          paymentMethod="Paypal"
          subtotal="$365.00"
          discount="20%"
          shipping="Free"
          total="$84.00"
        />
      </Box>

      <OrderTracking steps={steps} currentStep={2} />

      <OrderItemsTable items={items} />
    </Box>
  );
};

export default OrderDetails;
