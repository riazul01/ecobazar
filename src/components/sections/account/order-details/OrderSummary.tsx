import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface OrderSummaryProps {
  orderId: string;
  paymentMethod: string;
  subtotal: string | number;
  discount: string;
  shipping: string;
  total: string | number;
}

const OrderSummary = ({
  orderId,
  paymentMethod,
  subtotal,
  discount,
  shipping,
  total,
}: OrderSummaryProps) => {
  const rows = [
    {
      label: "Subtotal:",
      value: subtotal,
    },
    {
      label: "Discount",
      value: discount,
    },
    {
      label: "Shipping",
      value: shipping,
    },
  ];

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            flex: 1,
            px: 2.5,
            py: 2.25,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.disabled",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              mb: 0.5,
            }}
          >
            Order ID:
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {orderId}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            px: 2.5,
            py: 2.25,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.disabled",
              textTransform: "uppercase",
              letterSpacing: 0.8,
              mb: 0.5,
            }}
          >
            Payment Method:
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {paymentMethod}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ px: 2.5, py: 1.75 }}>
        {rows.map(({ label, value }) => (
          <React.Fragment key={label}>
            <Stack
              direction="row"
              sx={{
                py: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", fontWeight: 400 }}
              >
                {label}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {value}
              </Typography>
            </Stack>

            <Divider />
          </React.Fragment>
        ))}

        <Stack
          direction="row"
          sx={{ pt: 2, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            Total
          </Typography>

          <Typography variant="h6" sx={{ color: "success.dark" }}>
            {total}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default OrderSummary;
