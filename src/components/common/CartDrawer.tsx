import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Image from "components/base/Image";
import Iconify from "components/base/Iconify";
import { useCart } from "providers/CartProvider";
import { alpha } from "@mui/material";

const CartDrawer = () => {
  const { cartOpen, closeCart, items, removeFromCart, subtotal, totalCount } =
    useCart();

  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={closeCart}
      slotProps={{
        paper: {
          sx: {
            p: 3,
          },
        },
      }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          width: 420,
          boxSizing: "border-box",
        },
      }}
    >
      <Stack direction="column" sx={{ height: 1 }}>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Shopping Cart ({totalCount})
          </Typography>

          <IconButton
            onClick={closeCart}
            aria-label="Close shopping cart"
            disableRipple
            sx={{
              mr: -1.5,
              width: 42,
              height: 42,
              color: "text.primary",
            }}
          >
            <Iconify
              icon="solar:close-linear"
              sx={{
                fontSize: 28,
              }}
            />
          </IconButton>
        </Stack>

        {/* Products */}
        <Stack
          direction="column"
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
          }}
        >
          {items.map((item, index) => (
            <Box key={item.id ?? index}>
              <Stack
                sx={{
                  alignItems: "center",
                  py: 2,
                }}
              >
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: 100,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />

                {/* Product Info */}
                <Stack
                  direction="column"
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    pl: 2,
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 0.5 }}>
                    {item.name}
                  </Typography>

                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {item.quantity} kg x{" "}
                    <Typography
                      component="span"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      {item.price.toFixed(2)}
                    </Typography>
                  </Typography>
                </Stack>

                {/* Remove */}
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                  sx={{
                    width: 30,
                    height: 30,
                    flexShrink: 0,
                    p: 0,
                    border: 1,
                    borderColor: "divider",
                    color: "text.secondary",
                  }}
                >
                  <Iconify
                    icon="solar:close-linear"
                    sx={{
                      fontSize: 18,
                    }}
                  />
                </IconButton>
              </Stack>

              {index < items.length - 1 && <Divider />}
            </Box>
          ))}
        </Stack>

        {/* Total */}
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mt: "auto",
            mb: 2,
          }}
        >
          <Typography variant="body1">
            {totalCount} Product
            {totalCount !== 1 ? "s" : ""}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            ${subtotal.toFixed(2)}
          </Typography>
        </Stack>

        <Button variant="contained" size="medium" sx={{ mb: 1.5 }} fullWidth>
          Checkout
        </Button>

        <Button
          size="medium"
          sx={(theme) => ({
            bgcolor: `${alpha(theme.palette.primary.light, 0.1)} !important`,
          })}
          fullWidth
        >
          Go To Cart
        </Button>
      </Stack>
    </Drawer>
  );
};

export default CartDrawer;
