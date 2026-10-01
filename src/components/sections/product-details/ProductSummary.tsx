import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { alpha } from "@mui/material";

import Iconify from "components/base/Iconify";
import Farmary from "components/icons/FarmaryIcon";
import { useCart } from "providers/CartProvider";
import { socialLinks } from "data/social-links";
import { paths } from "routes/paths";

interface ProductSummaryProps {
  product?: {
    id: string | number;
    name: string;
    price: number;
    originalPrice?: number;
    discountInPercent?: number;
    rating: number;
    ratingCount: number;
    sku?: string;
    image: string;
    desc: string;
    category: string;
    brandName?: string;
    inStock?: boolean;
    stockCount?: number;
    tags?: string[];
    unit?: string;
    weight?: number | string;
  };
}

const defaultProduct = {
  id: 2,
  name: "Chinese Cabbage",
  price: 12.0,
  originalPrice: 14.0,
  discountInPercent: 15,
  rating: 4.8,
  ratingCount: 3800,
  sku: "ECO-251594",
  unit: "kg",
  weight: 1,
  image:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
  desc: "Farm fresh organic Chinese cabbage harvested with care. Crisp, nutritious, and tender leaves packed with antioxidants, Vitamin C, and essential minerals for healthy daily meals.",
  category: "Vegetables",
  brandName: "EcoGreens Farm",
  inStock: true,
  stockCount: 1200,
  tags: ["Vegetables", "Healthy", "Chinese Cabbage", "Organic", "Fresh Produce"],
};

const ProductSummary = ({ product = defaultProduct }: ProductSummaryProps) => {
  const currentProduct = { ...defaultProduct, ...product };
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { items, addToCart, updateQuantity } = useCart();

  const productId = currentProduct.id;
  const cartItem = items.find(
    (item) => String(item.id) === String(productId),
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(
      {
        id: productId,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        unit: currentProduct.unit || "kg",
        weight: `${currentProduct.weight || 1} ${currentProduct.unit || "kg"}`,
      },
      1,
      false,
    );
  };

  const originalPrice =
    currentProduct.originalPrice ??
    (currentProduct.discountInPercent && currentProduct.discountInPercent > 0
      ? Number((currentProduct.price / (1 - currentProduct.discountInPercent / 100)).toFixed(2))
      : undefined);

  return (
    <Box sx={{ flex: 1 }}>
      {/* Title & Status */}
      <Stack
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1.5,
          mb: 1.5,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          {currentProduct.name}
        </Typography>
        <Chip
          label={currentProduct.inStock ? "In Stock" : "Out of Stock"}
          size="small"
          sx={(theme) => ({
            bgcolor: alpha(theme.palette.success.main, 0.15),
            color: "success.dark",
            fontWeight: 600,
            fontSize: "0.8rem",
            borderRadius: 1.5,
            "& .MuiChip-label": {
              color: "success.dark",
              px: 1.25,
            },
          })}
        />
      </Stack>

      {/* Ratings & SKU */}
      <Stack
        sx={{
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Stack sx={{ alignItems: "center", gap: 0.75 }}>
          <Rating
            name="product-rating"
            value={currentProduct.rating}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
            {currentProduct.ratingCount.toLocaleString()} Reviews
          </Typography>
        </Stack>

        <Box
          sx={{
            height: 4,
            width: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled",
          }}
        />

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>SKU:</strong> {currentProduct.sku || `ECO-${currentProduct.id}251`}
        </Typography>
      </Stack>

      {/* Price Section */}
      <Stack sx={{ alignItems: "center", gap: 1.5, mb: 2.5 }}>
        {originalPrice && (
          <Typography
            component="span"
            variant="h5"
            sx={{
              color: "text.disabled",
              textDecoration: "line-through",
              fontWeight: 400,
            }}
          >
            ${originalPrice.toFixed(2)}
          </Typography>
        )}
        <Typography
          component="span"
          variant="h3"
          sx={{ fontWeight: 500, color: "primary.dark" }}
        >
          ${currentProduct.price.toFixed(2)}
        </Typography>
        {currentProduct.discountInPercent && currentProduct.discountInPercent > 0 && (
          <Chip
            label={`${currentProduct.discountInPercent}% Off`}
            size="small"
            sx={(theme) => ({
              bgcolor: alpha(theme.palette.error.main, 0.12),
              color: "error.main",
              fontWeight: 700,
              fontSize: "0.8rem",
              borderRadius: 1.5,
              "& .MuiChip-label": {
                color: "error.main",
                px: 1,
              },
            })}
          />
        )}
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Brand & Share */}
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
        }}
      >
        <Stack sx={{ gap: 1.25, alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
            Brand:
          </Typography>
          <Box sx={{ width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Farmary />
          </Box>
        </Stack>

        <Stack sx={{ gap: 0.5, alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500, mr: 0.5 }}>
            Share:
          </Typography>
          {socialLinks
            .filter((item) => item.name !== "LinkedIn")
            .map((item) => {
            const brandColor = item.color || "#1877F2";
            return (
              <IconButton
                key={item.id}
                component={Link}
                href={item.link}
                target="_blank"
                size="small"
                aria-label={`Share on ${item.name || "social media"}`}
                sx={(theme) => ({
                  width: 32,
                  height: 32,
                  color: "text.secondary",
                  borderRadius: "50%",
                  transition: theme.transitions.create(["color", "background-color"]),
                  "&:hover": {
                    color: brandColor,
                    bgcolor: alpha(brandColor, 0.12),
                  },
                })}
              >
                <Iconify icon={item.icon} sx={{ fontSize: 16 }} />
              </IconButton>
            );
          })}
        </Stack>
      </Stack>

      {/* Description Preview */}
      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}>
        {currentProduct.desc}
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Actions Section */}
      <Stack
        sx={{
          py: 1,
          gap: 1.5,
          alignItems: "center",
          flexWrap: "nowrap",
          width: 1,
        }}
      >
        {quantity === 0 ? (
          <Button
            variant="contained"
            size="large"
            onClick={handleAddToCart}
            startIcon={
              <Iconify
                icon="material-symbols:shopping-cart-outline-rounded"
                sx={{ fontSize: 20 }}
              />
            }
            sx={{
              flex: 1,
              height: 48,
              minWidth: 140,
              whiteSpace: "nowrap",
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Stack
            sx={{
              p: "4px",
              alignItems: "center",
              justifyContent: "space-between",
              border: 1,
              borderColor: "divider",
              borderRadius: 8,
              bgcolor: "grey.50",
              flex: 1,
              height: 48,
              boxSizing: "border-box",
            }}
          >
            <IconButton
              size="small"
              onClick={() => updateQuantity(productId, quantity - 1)}
              aria-label="Decrease quantity"
              sx={(theme) => ({
                width: 36,
                height: 36,
                minWidth: 36,
                minHeight: 36,
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
                sx={{ fontSize: 16 }}
              />
            </IconButton>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontWeight: 500,
                fontSize: "1rem",
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
                width: 36,
                height: 36,
                minWidth: 36,
                minHeight: 36,
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
              <Iconify icon="solar:add-bold" sx={{ fontSize: 16 }} />
            </IconButton>
          </Stack>
        )}

        {/* Wishlist Button - Soft Variant */}
        <IconButton
          onClick={() => setIsWishlisted((prev) => !prev)}
          aria-label="Add to wishlist"
          sx={(theme) => ({
            width: 48,
            height: 48,
            minWidth: 48,
            minHeight: 48,
            flexShrink: 0,
            borderRadius: "50%",
            bgcolor: isWishlisted
              ? alpha(theme.palette.error.main, 0.12)
              : alpha(theme.palette.primary.main, 0.1),
            color: isWishlisted ? "error.main" : "primary.main",
            "&:hover": {
              bgcolor: isWishlisted
                ? alpha(theme.palette.error.main, 0.2)
                : alpha(theme.palette.primary.main, 0.18),
            },
          })}
        >
          <Iconify
            icon={isWishlisted ? "solar:heart-bold" : "solar:heart-linear"}
            sx={{
              fontSize: 22,
              color: isWishlisted ? "error.main" : "primary.main",
            }}
          />
        </IconButton>
      </Stack>

      <Divider sx={{ my: 2.5 }} />

      {/* Meta details */}
      <Stack direction="column" sx={{ gap: 1.5 }}>
        <Stack sx={{ alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", minWidth: 80 }}>
            Category:
          </Typography>
          <Link
            href={paths.shop}
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              textDecoration: "none",
              "&:hover": { color: "primary.main", textDecoration: "underline" },
            }}
          >
            {currentProduct.category}
          </Link>
        </Stack>

        <Stack sx={{ alignItems: "flex-start", gap: 1, flexWrap: "wrap" }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", minWidth: 80, mt: 0.5 }}>
            Tags:
          </Typography>
          <Stack sx={{ gap: 0.75, flexWrap: "wrap" }}>
            {currentProduct.tags.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                component={Link}
                href={paths.shop}
                clickable
                sx={{
                  bgcolor: "grey.100",
                  color: "text.primary",
                  fontSize: "0.785rem",
                  fontWeight: 500,
                  borderRadius: 1.5,
                  border: 1,
                  borderColor: "divider",
                  "& .MuiChip-label": {
                    color: "text.primary",
                    px: 1.25,
                  },
                  "&:hover": {
                    bgcolor: "primary.main",
                    borderColor: "primary.main",
                    "& .MuiChip-label": {
                      color: "common.white",
                    },
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductSummary;
