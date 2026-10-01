import { useState, useEffect } from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Iconify from "components/base/Iconify";
import ProductQuickViewModal from "components/common/ProductQuickViewModal";
import { useCart } from "providers/CartProvider";
import { useWishlist } from "providers/WishlistProvider";
import type { ProductData } from "data/products";
import { paths } from "routes/paths";

export interface ProductCardProps {
  data?: ProductData;
  product?: ProductData;
}

const defaultProduct: ProductData = {
  id: 1,
  name: "Chinese cabbage",
  weight: 1,
  unit: "kg",
  price: 60,
  discountInPercent: 10,
  rating: 4.5,
  ratingCount: 4200,
  image:
    "https://images.pexels.com/photos/35974369/pexels-photo-35974369/free-photo-of-fresh-organic-vegetables-and-fruits-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "",
  category: "vegetables",
  subCategory: "featured",
  tags: ["vegetable", "green", "organic"],
  inStock: true,
  stockCount: 1200,
  sales: 124032,
  brandName: "freshfirm",
  brandLink: "",
};

const ProductCard = ({ data, product }: ProductCardProps) => {
  const currentProduct = data || product || defaultProduct;
  const { items, addToCart, updateQuantity } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const productId = currentProduct.id;
  const isWishlisted = isInWishlist(productId);
  const cartItem = items.find(
    (item) => String(item.id) === String(productId),
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleOpenQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.history.pushState(
      { quickView: true, prevUrl: window.location.pathname + window.location.search },
      "",
      paths.productDetails(productId),
    );
    setQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setQuickViewOpen(false);
    if (window.history.state?.quickView) {
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.history.state?.prevUrl || window.location.pathname);
    }
  };

  useEffect(() => {
    if (!quickViewOpen) return;
    const handlePopState = () => {
      setQuickViewOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [quickViewOpen]);

  const handleAddToCart = () => {
    addToCart(
      {
        id: productId,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        unit: currentProduct.unit,
        weight: currentProduct.weight,
      },
      1,
      false,
    );
  };

  const originalPrice =
    currentProduct.discountInPercent > 0
      ? (
          currentProduct.price /
          (1 - currentProduct.discountInPercent / 100)
        ).toFixed(2)
      : null;

  return (
    <Card
      sx={{
        position: "relative",
        outline: 1,
        outlineColor: "divider",
        borderRadius: 2,
        // height: "100%",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <Box sx={{ position: "relative", cursor: "pointer" }}>
        <CardMedia
          component="img"
          image={currentProduct.image}
          alt={currentProduct.name}
          height={240}
          sx={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            objectFit: "cover",
          }}
        />
        {currentProduct.discountInPercent > 0 && (
          <Chip
            label={`${currentProduct.discountInPercent}% OFF`}
            size="small"
            color="error"
            sx={{ position: "absolute", top: 10, right: 10, fontWeight: 700 }}
          />
        )}
        <Stack
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 240,
            alignItems: "center",
            justifyContent: "center",
            gap: 1.25,
            bgcolor: alpha(theme.palette.common.black, 0.45),
            borderRadius: 2,
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            opacity: 0,
            transition: theme.transitions.create("all", {
              duration: 200,
              easing: theme.transitions.easing.easeInOut,
            }),
            "&:hover": {
              opacity: 1,
            },
          })}
        >
          <IconButton
            onClick={handleOpenQuickView}
            aria-label="Quick view product"
            size="large"
            sx={{ background: `rgba(0, 0, 0, 0.45) !important` }}
          >
            <Iconify icon="ion:eye-outline" color="white" />
          </IconButton>

          <IconButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(currentProduct);
            }}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            size="large"
            sx={{ background: `rgba(0, 0, 0, 0.45) !important` }}
          >
            <Iconify
              icon="proicons:heart"
              sx={{
                color: isWishlisted ? "error.main" : "white",
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
            />
          </IconButton>

          <IconButton
            size="large"
            sx={{ background: `rgba(0, 0, 0, 0.45) !important` }}
          >
            <Iconify icon="sidekickicons:arrows-crossing-solid" color="white" />
          </IconButton>
        </Stack>
      </Box>

      <CardContent sx={{ flex: 1 }}>
        <Stack
          spacing={1}
          direction="column"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            component={Link}
            href={paths.productDetails(productId)}
            variant="h6"
            sx={{
              color: "primary.dark",
              textAlign: "center",
              lineHeight: 1.3,
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {currentProduct.name}
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Rating
              name={`rating-${productId}`}
              size="small"
              defaultValue={currentProduct.rating || 4.5}
              precision={0.5}
              readOnly
            />
            <Typography
              variant="body2"
              sx={{ color: "neutral.lighter", fontWeight: 500 }}
            >
              (
              {currentProduct.ratingCount >= 1000
                ? `${(currentProduct.ratingCount / 1000).toFixed(1)}k`
                : currentProduct.ratingCount}
              )
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="neutral.lighter">
            {currentProduct.weight} {currentProduct.unit}
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              component="ins"
              variant="h6"
              sx={{ textDecoration: "none", fontWeight: 600 }}
            >
              ${currentProduct.price.toFixed(2)}
            </Typography>
            {originalPrice && (
              <Typography
                component="del"
                variant="h6"
                sx={{ color: "grey.400", fontWeight: 400 }}
              >
                ${originalPrice}
              </Typography>
            )}
          </Stack>
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        {quantity === 0 ? (
          <Button
            variant="contained"
            size="medium"
            onClick={handleAddToCart}
            startIcon={
              <Iconify
                icon="material-symbols:shopping-cart-outline-rounded"
                sx={{ fontSize: 18 }}
              />
            }
            sx={{ height: 40, border: "none", whiteSpace: "nowrap" }}
            fullWidth
          >
            Add to Cart
          </Button>
        ) : (
          <Stack
            sx={{
              p: "3px",
              alignItems: "center",
              justifyContent: "space-between",
              border: 1,
              borderColor: "divider",
              borderRadius: 8,
              bgcolor: "grey.50",
              width: 1,
              height: 40,
              boxSizing: "border-box",
            }}
          >
            <IconButton
              size="small"
              onClick={() => updateQuantity(productId, quantity - 1)}
              aria-label="Decrease quantity"
              sx={(theme) => ({
                width: 32,
                height: 32,
                minWidth: 32,
                minHeight: 32,
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
                  color: quantity === 1 ? "error.main" : "text.primary",
                },
              })}
            >
              <Iconify
                icon={quantity === 1 ? "solar:trash-bin-trash-bold" : "solar:minus-bold"}
                sx={{ fontSize: 15 }}
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
              }}
            >
              {quantity} in Cart
            </Typography>

            <IconButton
              size="small"
              onClick={() => updateQuantity(productId, quantity + 1)}
              aria-label="Increase quantity"
              sx={(theme) => ({
                width: 32,
                height: 32,
                minWidth: 32,
                minHeight: 32,
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
              <Iconify icon="solar:add-bold" sx={{ fontSize: 15 }} />
            </IconButton>
          </Stack>
        )}
      </CardActions>

      {quickViewOpen && (
        <ProductQuickViewModal
          open={quickViewOpen}
          onClose={handleCloseQuickView}
          product={currentProduct}
        />
      )}
    </Card>
  );
};

export default ProductCard;
