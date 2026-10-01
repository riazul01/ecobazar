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
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(
      {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        unit: "kg",
        weight: "1 kg",
      },
      quantity,
      true,
    );
  };

  return (
    <Box sx={{ flex: 1 }}>
      {/* Title & Status */}
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
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
          <strong>SKU:</strong> {currentProduct.sku}
        </Typography>
      </Stack>

      {/* Price Section */}
      <Stack sx={{ alignItems: "center", gap: 1.5, mb: 2.5 }}>
        {currentProduct.originalPrice && (
          <Typography
            component="span"
            variant="h5"
            sx={{
              color: "text.disabled",
              textDecoration: "line-through",
              fontWeight: 400,
            }}
          >
            ${currentProduct.originalPrice.toFixed(2)}
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

      {/* Quantity & Actions */}
      <Stack
        sx={{
          py: 1,
          gap: 1.5,
          alignItems: "center",
          flexWrap: "wrap",
          width: 1,
        }}
      >
        {/* Quantity Controls */}
        <Stack
          sx={{
            order: 1,
            p: "4px",
            alignItems: "center",
            justifyContent: "space-between",
            border: 1,
            borderColor: "divider",
            borderRadius: 8,
            bgcolor: "grey.50",
            width: { xs: "calc(100% - 60px)", sm: 124 },
            height: 48,
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          <IconButton
            size="small"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            sx={(theme) => ({
              width: 34,
              height: 34,
              minWidth: 34,
              minHeight: 34,
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
              },
              "&.Mui-disabled": {
                opacity: 0.4,
                bgcolor: theme.palette.grey[50],
              },
            })}
          >
            <Iconify icon="solar:minus-bold" sx={{ fontSize: 14 }} />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              fontSize: "1rem",
              color: "text.primary",
              userSelect: "none",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {quantity}
          </Typography>
          <IconButton
            size="small"
            onClick={handleIncrement}
            aria-label="Increase quantity"
            sx={(theme) => ({
              width: 34,
              height: 34,
              minWidth: 34,
              minHeight: 34,
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
              },
            })}
          >
            <Iconify icon="solar:add-bold" sx={{ fontSize: 14 }} />
          </IconButton>
        </Stack>

        {/* Wishlist Button - Soft Variant */}
        <IconButton
          onClick={() => setIsWishlisted((prev) => !prev)}
          aria-label="Add to wishlist"
          sx={(theme) => ({
            order: { xs: 2, sm: 3 },
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

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleAddToCart}
          startIcon={<Iconify icon="solar:bag-3-bold" sx={{ fontSize: 20 }} />}
          sx={{
            order: { xs: 3, sm: 2 },
            flex: { xs: "1 1 100%", sm: 1 },
            width: { xs: 1, sm: "auto" },
            height: 48,
            minWidth: 140,
            whiteSpace: "nowrap",
          }}
        >
          Add to Cart
        </Button>
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
