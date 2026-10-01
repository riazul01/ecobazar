import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { alpha } from "@mui/material";

import Image from "components/base/Image";
import Iconify from "components/base/Iconify";
import { useCart } from "providers/CartProvider";
import { paths } from "routes/paths";

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
            p: { xs: 2, sm: 3 },
          },
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 100,
        [`& .${drawerClasses.paper}`]: {
          width: { xs: 1, sm: 400, md: 420 },
          maxWidth: "100vw",
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
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "h6.fontSize", sm: "h5.fontSize" },
            }}
          >
            Shopping Cart ({totalCount})
          </Typography>

          <IconButton
            onClick={closeCart}
            aria-label="Close shopping cart"
            disableRipple
            sx={(theme) => ({
              mr: { xs: -0.5, sm: -1.5 },
              width: { xs: 36, sm: 42 },
              height: { xs: 36, sm: 42 },
              color: "text.primary",
              transition: theme.transitions.create("color", {
                duration: 200,
                easing: theme.transitions.easing.easeInOut,
              }),
              "&:hover": {
                color: "error.main",
              },
            })}
          >
            <Iconify
              icon="solar:close-linear"
              sx={{
                fontSize: { xs: 24, sm: 28 },
              }}
            />
          </IconButton>
        </Stack>

        {items.length === 0 ? (
          <Stack
            direction="column"
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              pb: { xs: 4, sm: 6 },
            }}
          >
            <Box
              sx={(theme) => ({
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2.5,
              })}
            >
              <Iconify
                icon="noto-v1:shopping-cart"
                sx={{
                  fontSize: { xs: 42, sm: 52 },
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: "h6.fontSize", sm: "h5.fontSize" },
              }}
            >
              Your Cart is Empty
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxWidth: 300,
                mb: 3,
              }}
            >
              Looks like you haven't added any items to your cart yet. Explore our products and add them here!
            </Typography>
            <Button
              component={Link}
              href={paths.shop}
              onClick={closeCart}
              variant="contained"
              size="medium"
              startIcon={<Iconify icon="solar:bag-3-linear" />}
              sx={{ px: 4 }}
            >
              Start Shopping
            </Button>
          </Stack>
        ) : (
          <>
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
                      gap: { xs: 1.5, sm: 2 },
                    }}
                  >
                    {/* Product Image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: { xs: 80, sm: 100 },
                        height: { xs: 70, sm: 80 },
                        objectFit: "cover",
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />

                    {/* Product Info */}
                    <Stack
                      direction="column"
                      sx={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 0.5,
                          fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
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

            <Button
              variant="contained"
              size="medium"
              sx={{ mb: 1.5 }}
              fullWidth
            >
              Checkout
            </Button>

            <Button
              component={Link}
              href={paths.cart}
              onClick={closeCart}
              size="medium"
              sx={(theme) => ({
                bgcolor: `${alpha(theme.palette.primary.light, 0.1)} !important`,
              })}
              fullWidth
            >
              Go To Cart
            </Button>
          </>
        )}
      </Stack>
    </Drawer>
  );
};

export default CartDrawer;
