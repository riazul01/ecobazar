import { useState } from "react";
import { Link as RouterLink } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import Alert, { type AlertColor } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

import Iconify from "components/base/Iconify";
import Image from "components/base/Image";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import ProductCard from "components/common/ProductCard";
import SectionWrapper from "components/sections/SectionWrapper";
import { featuredProducts, type ProductData } from "data/products";
import { useCart } from "providers/CartProvider";
import { useWishlist } from "providers/WishlistProvider";
import { paths } from "routes/paths";

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, icon: "mdi-light:home", link: paths.home },
  { id: 2, title: "Wishlist", active: true },
];

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, updateQuantity, items: cartItems } = useCart();

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<AlertColor>("success");

  const showToast = (
    message: string,
    severity: AlertColor = "success",
  ) => {
    setToastMessage(message);
    setToastSeverity(severity);
    setToastOpen(true);
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToastOpen(false);
  };

  const handleAddToCart = (product: ProductData) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        unit: product.unit,
        weight: product.weight,
      },
      1,
      false,
    );
    showToast(`"${product.name}" added to your cart!`);
  };

  const handleRemove = (product: ProductData) => {
    removeFromWishlist(product.id);
    showToast(`"${product.name}" removed from wishlist.`, "info");
  };

  const handleClearWishlist = () => {
    clearWishlist();
    showToast("Wishlist cleared.", "info");
  };

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <SectionWrapper sx={{ py: { xs: 4, md: 6 } }}>
        {wishlistItems.length === 0 ? (
          /* Empty Wishlist State */
          <Box sx={{ textAlign: "center", py: { xs: 6, md: 10 } }}>
            <Box
              sx={(theme) => ({
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                color: "primary.main",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              })}
            >
              <Iconify icon="noto-v1:sparkling-heart" sx={{ fontSize: 54 }} />
            </Box>

            <Typography
              variant="h3"
              sx={{ fontWeight: 600, color: "text.primary", mb: 1.5 }}
            >
              Your Wishlist is Empty
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
              Explore more and shortlist some items! You haven't added any
              products to your wishlist yet.
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
                Recommended For You
              </Typography>
              <Grid container spacing={2}>
                {featuredProducts.slice(0, 4).map((product) => (
                  <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          /* Active Wishlist Content */
          <Box>
            {/* Wishlist Header Section */}
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                mb: 3.5,
              }}
            >
              <Stack sx={{ alignItems: "center", gap: 1.5 }}>
                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                  My Wishlist
                </Typography>
                <Chip
                  label={`${wishlistItems.length} item${
                    wishlistItems.length !== 1 ? "s" : ""
                  }`}
                  size="small"
                  sx={(theme) => ({
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.dark",
                    borderRadius: 4,
                    fontSize: "0.8rem",
                  })}
                />
              </Stack>

              <Button
                variant="text"
                color="error"
                disableRipple
                onClick={handleClearWishlist}
                startIcon={<Iconify icon="solar:trash-bin-trash-linear" />}
                sx={{ p: 0 }}
              >
                Clear Wishlist
              </Button>
            </Stack>

            {/* Main Wishlist Table - Desktop / Tablet */}
            <Card
              sx={{
                display: { xs: "none", md: "block" },
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
                boxShadow: "none",
                overflow: "hidden",
                mb: 3,
                p: 0,
              }}
            >
              <TableContainer sx={{ p: 0 }}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead sx={{ bgcolor: "grey.50" }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "text.secondary",
                          py: 1.75,
                          width: "38%",
                        }}
                      >
                        PRODUCT
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          color: "text.secondary",
                          py: 1.75,
                          width: 140,
                        }}
                      >
                        PRICE
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          color: "text.secondary",
                          py: 1.75,
                          width: 150,
                        }}
                      >
                        STOCK STATUS
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color: "text.secondary",
                          py: 1.75,
                          width: 220,
                        }}
                      >
                        ACTION
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {wishlistItems.map((product) => {
                      const cartItem = cartItems.find(
                        (ci) => String(ci.id) === String(product.id),
                      );
                      const quantity = cartItem ? cartItem.quantity : 0;
                      const originalPrice =
                        product.discountInPercent > 0
                          ? (
                              product.price /
                              (1 - product.discountInPercent / 100)
                            ).toFixed(2)
                          : null;

                      return (
                        <TableRow
                          key={product.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {/* Product Info */}
                          <TableCell sx={{ py: 2.5, px: 3 }}>
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center" }}
                            >
                              <Box
                                component={RouterLink}
                                to={paths.productDetails(product.id)}
                                sx={{
                                  width: 72,
                                  height: 72,
                                  borderRadius: 2,
                                  overflow: "hidden",
                                  border: 1,
                                  borderColor: "divider",
                                  bgcolor: "grey.50",
                                  flexShrink: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  "&:hover img": {
                                    transform: "scale(1.06)",
                                  },
                                }}
                              >
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                  }}
                                />
                              </Box>

                              <Stack direction="column" spacing={0.5}>
                                <Typography
                                  component={RouterLink}
                                  to={paths.productDetails(product.id)}
                                  variant="subtitle1"
                                  sx={{
                                    fontWeight: 600,
                                    color: "text.primary",
                                    textDecoration: "none",
                                    "&:hover": {
                                      color: "primary.main",
                                    },
                                  }}
                                >
                                  {product.name}
                                </Typography>

                                <Stack
                                  direction="row"
                                  spacing={1}
                                  sx={{ alignItems: "center" }}
                                >
                                  <Rating
                                    value={product.rating || 4.5}
                                    precision={0.5}
                                    size="small"
                                    readOnly
                                    sx={{ fontSize: "0.95rem" }}
                                  />
                                  <Typography
                                    variant="caption"
                                    sx={{ color: "text.secondary" }}
                                  >
                                    (
                                    {product.ratingCount >= 1000
                                      ? `${(product.ratingCount / 1000).toFixed(1)}k`
                                      : product.ratingCount || 0}
                                    )
                                  </Typography>
                                </Stack>

                                <Typography
                                  variant="caption"
                                  sx={{ color: "text.secondary" }}
                                >
                                  {product.weight} {product.unit} •{" "}
                                  <Box
                                    component="span"
                                    sx={{ textTransform: "capitalize" }}
                                  >
                                    {product.category}
                                  </Box>
                                </Typography>
                              </Stack>
                            </Stack>
                          </TableCell>

                          {/* Price */}
                          <TableCell sx={{ py: 2.5 }}>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{ alignItems: "center" }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "text.primary" }}
                              >
                                ${product.price.toFixed(2)}
                              </Typography>
                              {originalPrice && (
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textDecoration: "line-through",
                                    color: "text.disabled",
                                  }}
                                >
                                  ${originalPrice}
                                </Typography>
                              )}
                            </Stack>
                          </TableCell>

                          {/* Stock Status */}
                          <TableCell sx={{ py: 2.5 }}>
                            <Chip
                              label={
                                product.inStock ? "In Stock" : "Out of Stock"
                              }
                              size="small"
                              sx={(theme) => ({
                                fontWeight: 600,
                                borderRadius: 5,
                                bgcolor: product.inStock
                                  ? alpha(theme.palette.success.main, 0.1)
                                  : alpha(theme.palette.error.main, 0.1),
                                color: product.inStock
                                  ? "success.dark"
                                  : "error.main",
                                border: "none",
                              })}
                            />
                          </TableCell>

                          {/* Actions */}
                          <TableCell align="right" sx={{ py: 2.5, px: 3 }}>
                            <Stack
                              direction="row"
                              spacing={1.5}
                              sx={{
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                            >
                              {quantity === 0 ? (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="small"
                                  disabled={!product.inStock}
                                  onClick={() => handleAddToCart(product)}
                                  startIcon={
                                    <Iconify
                                      icon="material-symbols:shopping-cart-outline-rounded"
                                      sx={{ fontSize: 18 }}
                                    />
                                  }
                                  sx={{
                                    width: 125,
                                    height: 36,
                                    px: 1.5,
                                    fontSize: "0.8125rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add to Cart
                                </Button>
                              ) : (
                                <Stack
                                  direction="row"
                                  sx={{
                                    p: "3px",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    border: 1,
                                    borderColor: "divider",
                                    borderRadius: 8,
                                    bgcolor: "grey.50",
                                    height: 36,
                                    width: 125,
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <IconButton
                                    size="small"
                                    onClick={() =>
                                      updateQuantity(product.id, quantity - 1)
                                    }
                                    aria-label="Decrease quantity"
                                    sx={(theme) => ({
                                      width: 28,
                                      height: 28,
                                      minWidth: 28,
                                      minHeight: 28,
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
                                          quantity === 1
                                            ? "error.main"
                                            : "text.primary",
                                      },
                                    })}
                                  >
                                    <Iconify
                                      icon={
                                        quantity === 1
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
                                      fontWeight: 500,
                                      fontSize: "0.875rem",
                                      color: "text.primary",
                                      userSelect: "none",
                                      fontVariantNumeric: "tabular-nums",
                                      px: 1,
                                    }}
                                  >
                                    {quantity}
                                  </Typography>

                                  <IconButton
                                    size="small"
                                    onClick={() =>
                                      updateQuantity(product.id, quantity + 1)
                                    }
                                    aria-label="Increase quantity"
                                    sx={(theme) => ({
                                      width: 28,
                                      height: 28,
                                      minWidth: 28,
                                      minHeight: 28,
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
                              )}

                              <IconButton
                                size="small"
                                onClick={() => handleRemove(product)}
                                aria-label={`Remove ${product.name}`}
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
                                    bgcolor: alpha(
                                      theme.palette.error.main,
                                      0.08,
                                    ),
                                  },
                                })}
                              >
                                <Iconify
                                  icon="mdi:close"
                                  sx={{ fontSize: 16 }}
                                />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>

            {/* Mobile Wishlist Card List */}
            <Stack
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" }, mb: 3 }}
            >
              {wishlistItems.map((product) => {
                const inCart = cartItems.some(
                  (ci) => String(ci.id) === String(product.id),
                );
                const quantity = inCart
                  ? cartItems.find((ci) => String(ci.id) === String(product.id))
                      ?.quantity || 0
                  : 0;
                const originalPrice =
                  product.discountInPercent > 0
                    ? (
                        product.price /
                        (1 - product.discountInPercent / 100)
                      ).toFixed(2)
                    : null;

                return (
                  <Card
                    key={product.id}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: 1,
                      borderColor: "divider",
                      boxShadow: "none",
                    }}
                  >
                    <Stack direction="column" spacing={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Box
                          component={RouterLink}
                          to={paths.productDetails(product.id)}
                          sx={{
                            width: 75,
                            height: 75,
                            borderRadius: 2,
                            overflow: "hidden",
                            border: 1,
                            borderColor: "divider",
                            bgcolor: "grey.50",
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>

                        <Stack direction="column" spacing={0.5} sx={{ flex: 1 }}>
                          <Stack
                            direction="row"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            }}
                          >
                            <Typography
                              component={RouterLink}
                              to={paths.productDetails(product.id)}
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                color: "text.primary",
                                textDecoration: "none",
                              }}
                            >
                              {product.name}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() => handleRemove(product)}
                              aria-label={`Remove ${product.name}`}
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
                                  bgcolor: alpha(
                                    theme.palette.error.main,
                                    0.08,
                                  ),
                                },
                              })}
                            >
                              <Iconify
                                icon="mdi:close"
                                sx={{ fontSize: 16 }}
                              />
                            </IconButton>
                          </Stack>

                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            {product.weight} {product.unit}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ alignItems: "center", mt: 0.5 }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600, color: "text.primary" }}
                            >
                              ${product.price.toFixed(2)}
                            </Typography>
                            {originalPrice && (
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: "line-through",
                                  color: "text.disabled",
                                }}
                              >
                                ${originalPrice}
                              </Typography>
                            )}
                          </Stack>
                        </Stack>
                      </Stack>

                      <Divider />

                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          label={product.inStock ? "In Stock" : "Out of Stock"}
                          size="small"
                          sx={(theme) => ({
                            fontWeight: 600,
                            borderRadius: 5,
                            bgcolor: product.inStock
                              ? alpha(theme.palette.success.main, 0.1)
                              : alpha(theme.palette.error.main, 0.1),
                            color: product.inStock
                              ? "success.dark"
                              : "error.main",
                            border: "none",
                          })}
                        />

                        {quantity === 0 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={!product.inStock}
                            onClick={() => handleAddToCart(product)}
                            startIcon={
                              <Iconify
                                icon="material-symbols:shopping-cart-outline-rounded"
                                sx={{ fontSize: 18 }}
                              />
                            }
                            sx={{
                              width: 125,
                              height: 36,
                              px: 1.5,
                              fontSize: "0.8125rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Add to Cart
                          </Button>
                        ) : (
                          <Stack
                            direction="row"
                            sx={{
                              p: "3px",
                              alignItems: "center",
                              justifyContent: "space-between",
                              border: 1,
                              borderColor: "divider",
                              borderRadius: 8,
                              bgcolor: "grey.50",
                              height: 36,
                              width: 125,
                              boxSizing: "border-box",
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              sx={(theme) => ({
                                width: 28,
                                height: 28,
                                minWidth: 28,
                                minHeight: 28,
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
                                    quantity === 1
                                      ? "error.main"
                                      : "text.primary",
                                },
                              })}
                            >
                              <Iconify
                                icon={
                                  quantity === 1
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
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                color: "text.primary",
                                userSelect: "none",
                                fontVariantNumeric: "tabular-nums",
                                px: 1,
                              }}
                            >
                              {quantity}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              aria-label="Increase quantity"
                              sx={(theme) => ({
                                width: 28,
                                height: 28,
                                minWidth: 28,
                                minHeight: 28,
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
                        )}
                      </Stack>
                    </Stack>
                  </Card>
                );
              })}
            </Stack>

            {/* Social Share & Navigation Footer Card */}
            <Card
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
                boxShadow: "none",
                bgcolor: "background.paper",
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", md: "center" },
                  gap: 2.5,
                }}
              >
                {/* Social Share */}
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "text.primary", mr: 0.5 }}
                  >
                    Share Wishlist:
                  </Typography>

                  <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    disableRipple
                    sx={{
                      color: "#1877F2",
                      p: 0.5,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Iconify icon="ri:facebook-fill" sx={{ fontSize: 22 }} />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    disableRipple
                    sx={{
                      color: "text.primary",
                      p: 0.5,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Iconify icon="ri:twitter-x-line" sx={{ fontSize: 22 }} />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    disableRipple
                    sx={{
                      color: "#E60023",
                      p: 0.5,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Iconify icon="ri:pinterest-fill" sx={{ fontSize: 22 }} />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    disableRipple
                    sx={{
                      color: "#25D366",
                      p: 0.5,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Iconify icon="ri:whatsapp-line" sx={{ fontSize: 22 }} />
                  </IconButton>
                </Stack>

                {/* Continue Shopping Link */}
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
            </Card>
          </Box>
        )}
      </SectionWrapper>

      {/* Action Toast Feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={toastSeverity}
          sx={{
            width: "100%",
            minWidth: { xs: 280, sm: 340 },
            borderRadius: 2,
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "#ffffff",
            bgcolor: "#1A1A1A",
            border: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "none",
            alignItems: "center",
            py: 0.75,
            px: 2,
            "& .MuiAlert-message": {
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 500,
              py: 0.5,
              pr: 2,
              flexGrow: 1,
            },
            "& .MuiAlert-icon": {
              color:
                toastSeverity === "success"
                  ? "primary.main"
                  : toastSeverity === "info"
                    ? "info.main"
                    : toastSeverity === "error"
                      ? "error.main"
                      : "warning.main",
              fontSize: 20,
              mr: 1.5,
              p: 0,
            },
            "& .MuiAlert-action": {
              p: 0,
              pl: 1,
              ml: "auto",
              "& .MuiIconButton-root": {
                color: "#EA4B48",
                p: 0.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ff6b6b",
                  bgcolor: "rgba(234, 75, 72, 0.12)",
                },
              },
            },
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Wishlist;
