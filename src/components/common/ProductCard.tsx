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
import { useCart } from "providers/CartProvider";
import type { ProductData } from "data/products";

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
        unit: currentProduct.unit,
        weight: `${currentProduct.weight} ${currentProduct.unit}`,
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
            size="large"
            sx={{ background: `rgba(0, 0, 0, 0.45) !important` }}
          >
            <Iconify icon="ion:eye-outline" color="white" />
          </IconButton>

          <IconButton
            size="large"
            sx={{ background: `rgba(0, 0, 0, 0.45) !important` }}
          >
            <Iconify icon="proicons:heart" color="white" />
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
            href="#!"
            variant="h6"
            sx={{
              color: "primary.dark",
              textAlign: "center",
              lineHeight: 1.3,
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
              <Iconify icon="material-symbols:shopping-cart-outline-rounded" />
            }
            sx={{ px: 0, border: "none" }}
            fullWidth
          >
            Add To Cart
          </Button>
        ) : (
          <Stack
            spacing={1}
            direction="row"
            sx={{
              width: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              onClick={() => updateQuantity(productId, quantity - 1)}
              aria-label="Decrease quantity"
              sx={(theme) => ({
                background: `${theme.palette.grey[100]} !important`,
                color: "text.primary",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  background: `${theme.palette.grey[200]} !important`,
                  color: "error.main",
                },
              })}
            >
              <Iconify icon="mingcute:minimize-line" />
            </IconButton>
            <Button
              variant="text"
              sx={(theme) => ({
                px: 0,
                flex: 1,
                fontWeight: 600,
                color: "text.primary",
                bgcolor: `${theme.palette.grey[100]} !important`,
                cursor: "default",
                "&:hover": {
                  bgcolor: `${theme.palette.grey[100]} !important`,
                },
              })}
              fullWidth
              disableRipple
            >
              {quantity} in Cart
            </Button>
            <IconButton
              size="large"
              onClick={() => updateQuantity(productId, quantity + 1)}
              aria-label="Increase quantity"
              sx={(theme) => ({
                background: `${theme.palette.grey[100]} !important`,
                color: "text.primary",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  background: `${theme.palette.grey[200]} !important`,
                  color: "primary.main",
                },
              })}
            >
              <Iconify icon="mingcute:add-line" />
            </IconButton>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
