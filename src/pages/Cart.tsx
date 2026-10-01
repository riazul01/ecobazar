import { useState } from "react";
import { Link as RouterLink } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { alpha, inputBaseClasses } from "@mui/material";

import Iconify from "components/base/Iconify";
import Image from "components/base/Image";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import ProductCard from "components/common/ProductCard";
import SectionWrapper from "components/sections/SectionWrapper";
import { featuredProducts } from "data/products";
import { useCart } from "providers/CartProvider";
import { paths } from "routes/paths";

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, icon: "mdi-light:home", link: paths.home },
  { id: 2, title: "Shopping Cart", active: true },
];

const FREE_SHIPPING_THRESHOLD = 50;

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState<
    number | null
  >(null);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  const handleApplyCoupon = () => {
    setCouponError("");
    setCouponSuccess("");
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    if (code === "ECO10" || code === "SAVE10") {
      setAppliedDiscountPercent(10);
      setCouponSuccess("Coupon 'ECO10' applied! 10% discount added.");
    } else if (code === "ECO20" || code === "SAVE20") {
      setAppliedDiscountPercent(20);
      setCouponSuccess("Coupon 'ECO20' applied! 20% discount added.");
    } else {
      setCouponError("Invalid coupon code. Try using 'ECO10'.");
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedDiscountPercent(null);
    setCouponCode("");
    setCouponSuccess("");
    setCouponError("");
  };

  const discountAmount = appliedDiscountPercent
    ? Number(((subtotal * appliedDiscountPercent) / 100).toFixed(2))
    : 0;

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = isFreeShipping || subtotal === 0 ? 0 : 5.0;
  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal,
  );
  const freeShippingProgress = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
  );

  const estimatedTax = Number(((subtotal - discountAmount) * 0.05).toFixed(2));
  const orderTotal = Math.max(
    0,
    subtotal -
      discountAmount +
      shippingCost +
      (subtotal > 0 ? estimatedTax : 0),
  );

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <SectionWrapper sx={{ py: { xs: 4, md: 6 } }}>
        {items.length === 0 ? (
          /* Empty Cart State */
          <Box sx={{ textAlign: "center", py: { xs: 6, md: 10 } }}>
            <Box
              sx={(theme) => ({
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.main",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              })}
            >
              <Iconify icon="noto-v1:shopping-cart" sx={{ fontSize: 52 }} />
            </Box>

            <Typography
              variant="h3"
              sx={{ fontWeight: 600, color: "text.primary", mb: 1.5 }}
            >
              Your Shopping Cart is Empty
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 480,
                mx: "auto",
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Before proceeding to checkout you must add some fresh products to
              your cart. Explore our wide selection of farm-fresh organic
              produce!
            </Typography>

            <Button
              component={RouterLink}
              to={paths.shop}
              variant="contained"
              size="large"
              startIcon={<Iconify icon="solar:bag-3-linear" />}
              sx={{ px: 4, py: 1.25 }}
            >
              Start Shopping
            </Button>

            {/* Recommendations Row */}
            <Box sx={{ mt: 8, textAlign: "left" }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                Popular Recommendations
              </Typography>
              <Grid container spacing={2}>
                {featuredProducts.slice(0, 4).map((product) => (
                  <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                    <ProductCard data={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          /* Active Cart State */
          <Box>
            <Stack
              sx={{
                mb: 4,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Stack sx={{ alignItems: "center", gap: 1.5 }}>
                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                  Shopping Cart
                </Typography>
                <Chip
                  label={`${totalCount} item${totalCount !== 1 ? "s" : ""}`}
                  size="small"
                  sx={(theme) => ({
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.dark",
                    borderRadius: 4,
                    fontSize: "0.8rem",
                  })}
                />
              </Stack>

              <Stack sx={{ alignItems: "center", gap: 3, flexWrap: "wrap" }}>
                <Button
                  variant="text"
                  color="error"
                  disableRipple
                  startIcon={<Iconify icon="solar:trash-bin-trash-linear" />}
                  onClick={clearCart}
                  sx={{ p: 0 }}
                >
                  Clear Cart
                </Button>

                <Button
                  component={RouterLink}
                  to={paths.shop}
                  variant="text"
                  disableRipple
                  endIcon={<Iconify icon="solar:arrow-right-linear" />}
                  sx={{ p: 0 }}
                >
                  Continue Shopping
                </Button>
              </Stack>
            </Stack>

            <Grid container spacing={{ xs: 3, lg: 4 }}>
              {/* Left Column: Cart Items Table & Coupon */}
              <Grid size={{ xs: 12, lg: 8 }}>
                {/* Free Shipping Progress Indicator */}
                <Card
                  variant="outlined"
                  sx={(theme) => ({
                    p: 2.5,
                    mb: 3,
                    borderRadius: 2,
                    bgcolor: isFreeShipping
                      ? alpha(theme.palette.success.main, 0.08)
                      : alpha(theme.palette.primary.main, 0.05),
                    borderColor: isFreeShipping
                      ? alpha(theme.palette.success.main, 0.25)
                      : alpha(theme.palette.primary.main, 0.2),
                  })}
                >
                  <Stack sx={{ alignItems: "center", gap: 1.5, mb: 1.25 }}>
                    <Iconify
                      icon={
                        isFreeShipping
                          ? "solar:verified-check-linear"
                          : "solar:delivery-linear"
                      }
                      sx={{
                        fontSize: 24,
                        color: isFreeShipping ? "success.main" : "primary.main",
                      }}
                    />
                    <Typography variant="body1" sx={{ color: "text.primary" }}>
                      {isFreeShipping ? (
                        <>
                          Congratulations! You have unlocked{" "}
                          <Typography component="span" sx={{ fontWeight: 600 }}>
                            Free Shipping
                          </Typography>.
                        </>
                      ) : (
                        <>
                          Add{" "}
                          <Typography component="span" sx={{ fontWeight: 600 }}>
                            ${remainingForFreeShipping.toFixed(2)}
                          </Typography>{" "}
                          more to get Free Shipping!
                        </>
                      )}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={freeShippingProgress}
                    color={isFreeShipping ? "success" : "primary"}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Card>

                {/* Cart Table Container */}
                <TableContainer
                  component={Card}
                  variant="outlined"
                  sx={{ borderRadius: 2, mb: 3, p: 0 }}
                >
                  <Table sx={{ minWidth: 620 }}>
                    <TableHead sx={{ bgcolor: "grey.50" }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "text.secondary",
                            py: 1.75,
                            width: "42%",
                          }}
                        >
                          PRODUCT
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "text.secondary", py: 1.75 }}
                        >
                          PRICE
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            color: "text.secondary",
                            py: 1.75,
                            width: "24%",
                          }}
                        >
                          QUANTITY
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "text.secondary", py: 1.75 }}
                        >
                          SUBTOTAL
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ width: 48, py: 1.75 }}
                        />
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {items.map((item) => (
                        <TableRow
                          key={item.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {/* Product Info */}
                          <TableCell sx={{ py: 2 }}>
                            <Stack sx={{ alignItems: "center", gap: 2 }}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                sx={{
                                  width: 72,
                                  height: 72,
                                  objectFit: "cover",
                                  borderRadius: 1.5,
                                  border: 1,
                                  borderColor: "divider",
                                  flexShrink: 0,
                                }}
                              />
                              <Box sx={{ minWidth: 0 }}>
                                <Typography
                                  component={Link}
                                  href={paths.productDetails(item.id)}
                                  variant="body1"
                                  sx={{
                                    color: "text.primary",
                                    textDecoration: "none",
                                    display: "block",
                                    mb: 0.5,
                                    "&:hover": {
                                      color: "primary.main",
                                      textDecoration: "underline",
                                    },
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{ color: "text.secondary" }}
                                >
                                  Unit:{" "}
                                  {(() => {
                                    if (!item.weight && !item.unit)
                                      return "1 kg";
                                    if (!item.weight) return `1 ${item.unit}`;
                                    const weightStr = String(
                                      item.weight,
                                    ).trim();
                                    const unitStr = item.unit
                                      ? String(item.unit).trim()
                                      : "";
                                    if (
                                      unitStr &&
                                      weightStr
                                        .toLowerCase()
                                        .endsWith(unitStr.toLowerCase())
                                    ) {
                                      return weightStr;
                                    }
                                    if (/[a-zA-Z]/.test(weightStr)) {
                                      return weightStr;
                                    }
                                    return `${weightStr} ${unitStr || "kg"}`;
                                  })()}
                                </Typography>
                              </Box>
                            </Stack>
                          </TableCell>

                          {/* Unit Price */}
                          <TableCell align="center" sx={{ py: 2 }}>
                            <Typography
                              variant="body1"
                              sx={{ color: "text.primary" }}
                            >
                              ${item.price.toFixed(2)}
                            </Typography>
                          </TableCell>

                          {/* Quantity Pill Group */}
                          <TableCell align="center" sx={{ py: 2 }}>
                            <Stack
                              sx={{
                                mx: "auto",
                                p: "3px",
                                alignItems: "center",
                                justifyContent: "space-between",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 8,
                                bgcolor: "grey.50",
                                width: 130,
                                height: 38,
                                boxSizing: "border-box",
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                aria-label="Decrease quantity"
                                sx={(theme) => ({
                                  width: 30,
                                  height: 30,
                                  minWidth: 30,
                                  minHeight: 30,
                                  borderRadius: "50%",
                                  bgcolor: theme.palette.common.white,
                                  color: "text.primary",
                                  border: 1,
                                  borderColor: "divider",
                                  boxSizing: "border-box",
                                  p: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  "&:hover": {
                                    bgcolor: theme.palette.grey[100],
                                    color:
                                      item.quantity === 1
                                        ? "error.main"
                                        : "text.primary",
                                  },
                                })}
                              >
                                <Iconify
                                  icon={
                                    item.quantity === 1
                                      ? "solar:trash-bin-trash-bold"
                                      : "solar:minus-bold"
                                  }
                                  sx={{ fontSize: 14 }}
                                />
                              </IconButton>

                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "center",
                                  fontSize: "0.9rem",
                                  color: "text.primary",
                                  userSelect: "none",
                                  fontVariantNumeric: "tabular-nums",
                                }}
                              >
                                {item.quantity}
                              </Typography>

                              <IconButton
                                size="small"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                aria-label="Increase quantity"
                                sx={(theme) => ({
                                  width: 30,
                                  height: 30,
                                  minWidth: 30,
                                  minHeight: 30,
                                  borderRadius: "50%",
                                  bgcolor: theme.palette.common.white,
                                  color: "text.primary",
                                  border: 1,
                                  borderColor: "divider",
                                  boxSizing: "border-box",
                                  p: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  "&:hover": {
                                    bgcolor: theme.palette.grey[100],
                                    color: "primary.main",
                                  },
                                })}
                              >
                                <Iconify
                                  icon="solar:add-bold"
                                  sx={{ fontSize: 14 }}
                                />
                              </IconButton>
                            </Stack>
                          </TableCell>

                          {/* Line Total */}
                          <TableCell align="right" sx={{ py: 2 }}>
                            <Typography
                              variant="body1"
                              sx={{ color: "primary.dark" }}
                            >
                              ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                          </TableCell>

                          {/* Remove Item */}
                          <TableCell align="center" sx={{ py: 2 }}>
                            <IconButton
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.name}`}
                              size="small"
                              sx={(theme) => ({
                                width: 28,
                                height: 28,
                                minWidth: 28,
                                minHeight: 28,
                                borderRadius: "50%",
                                border: 1,
                                borderColor: "divider",
                                color: "grey.500",
                                p: 0,
                                "&:hover": {
                                  borderColor: "error.main",
                                  color: "error.main",
                                  bgcolor: alpha(theme.palette.error.main, 0.08),
                                },
                              })}
                            >
                              <Iconify icon="mdi:close" sx={{ fontSize: 16 }} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* Coupon Box Card with Pill Input Group */}
                <Card variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h5" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Coupon Code
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2.5 }}
                  >
                    Have a promo coupon? Apply it below to enjoy instant savings
                    on your order.
                  </Typography>

                  <Stack
                    sx={{
                      width: 1,
                      maxWidth: 460,
                      height: { xs: 42, md: 46 },
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      id="coupon-code"
                      variant="filled"
                      placeholder="Enter coupon code (e.g. ECO10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={appliedDiscountPercent !== null}
                      sx={{
                        width: 1,
                        height: 1,
                        [`& .${inputBaseClasses.root}`]: {
                          pr: 5,
                          pl: 2.5,
                          height: 1,
                          borderRadius: 8,
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        appliedDiscountPercent
                          ? handleRemoveCoupon
                          : handleApplyCoupon
                      }
                      sx={{
                        ml: -5,
                        height: 1,
                        width: { xs: 90, sm: 140 },
                        borderRadius: 10,
                      }}
                    >
                      {appliedDiscountPercent ? "Remove" : "Apply"}
                    </Button>
                  </Stack>

                  {couponSuccess && (
                    <Typography
                      variant="caption"
                      sx={{ color: "success.main", mt: 1.25, display: "block" }}
                    >
                      {couponSuccess}
                    </Typography>
                  )}
                  {couponError && (
                    <Typography
                      variant="caption"
                      sx={{ color: "error.main", mt: 1.25, display: "block" }}
                    >
                      {couponError}
                    </Typography>
                  )}
                </Card>
              </Grid>

              {/* Right Column: Order Summary Card */}
              <Grid size={{ xs: 12, lg: 4 }}>
                <Card
                  variant="outlined"
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 2,
                    position: { lg: "sticky" },
                    top: { lg: 100 },
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 2.5, fontWeight: 500 }}>
                    Cart Totals
                  </Typography>

                  <Stack direction="column" sx={{ gap: 2 }}>
                    {/* Subtotal */}
                    <Stack
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Subtotal
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary" }}
                      >
                        ${subtotal.toFixed(2)}
                      </Typography>
                    </Stack>

                    {/* Shipping */}
                    <Stack
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Shipping
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isFreeShipping
                            ? "success.main"
                            : "text.primary",
                        }}
                      >
                        {isFreeShipping
                          ? "Free"
                          : `$${shippingCost.toFixed(2)}`}
                      </Typography>
                    </Stack>

                    {/* Coupon Discount */}
                    {appliedDiscountPercent !== null && (
                      <Stack
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: "success.main" }}
                        >
                          Discount ({appliedDiscountPercent}%)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "success.main" }}
                        >
                          -${discountAmount.toFixed(2)}
                        </Typography>
                      </Stack>
                    )}

                    {/* Estimated Tax */}
                    <Stack
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Estimated Tax (5%)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        ${estimatedTax.toFixed(2)}
                      </Typography>
                    </Stack>

                    <Divider sx={{ my: 1 }} />

                    {/* Total */}
                    <Stack
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        Total
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 500 }}>
                        ${orderTotal.toFixed(2)}
                      </Typography>
                    </Stack>

                    {/* Proceed to Checkout Button (Pill) */}
                    <Button
                      variant="contained"
                      endIcon={<Iconify icon="solar:arrow-right-linear" />}
                      sx={{
                        mt: 1.5,
                        fontSize: "1rem",
                      }}
                      fullWidth
                    >
                      Proceed to Checkout
                    </Button>

                    {/* Trust Badges */}
                    <Box
                      sx={{
                        mt: 2,
                        pt: 2,
                        borderTop: 1,
                        borderColor: "divider",
                      }}
                    >
                      <Stack direction="column" sx={{ gap: 1.5 }}>
                        <Stack sx={{ alignItems: "center", gap: 1.25 }}>
                          <Iconify
                            icon="solar:shield-check-bold"
                            sx={{ color: "primary.main", fontSize: 20 }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            100% Secure Checkout with SSL Encryption
                          </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: "center", gap: 1.25 }}>
                          <Iconify
                            icon="solar:box-minimalistic-bold"
                            sx={{ color: "primary.main", fontSize: 20 }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            Fresh Organic Produce Guaranteed
                          </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: "center", gap: 1.25 }}>
                          <Iconify
                            icon="solar:card-2-bold"
                            sx={{ color: "primary.main", fontSize: 20 }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            Multiple Payment Options Accepted
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}
      </SectionWrapper>
    </>
  );
};

export default Cart;
