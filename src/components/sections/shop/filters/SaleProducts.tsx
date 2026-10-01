import { Link as RouterLink } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { products, type ProductData } from "data/products";
import { paths } from "routes/paths";

const saleProducts: ProductData[] = products
  .filter((p) => p.discountInPercent > 0)
  .slice(0, 3);

const SaleProducts = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 500 }}>
        Sale Products
      </Typography>
      {saleProducts.map((product, index) => {
        const originalPrice =
          product.discountInPercent > 0
            ? (product.price / (1 - product.discountInPercent / 100)).toFixed(2)
            : null;

        return (
          <Card
            key={product.id}
            component={RouterLink}
            to={paths.productDetails(product.id)}
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: index !== saleProducts.length - 1 ? 1.75 : 0,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              textDecoration: "none",
              color: "inherit",
              transition: theme.transitions.create("all", {
                duration: 300,
                easing: theme.transitions.easing.easeInOut,
              }),
              "&:hover": {
                border: `1px solid ${theme.palette.primary.main}`,

                "& .title": {
                  color: "primary.dark",
                },
              },
            })}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: 102,
                aspectRatio: "1/1",
                borderTopLeftRadius: `6px !important`,
                borderBottomLeftRadius: `6px !important`,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: "0 !important" }}>
              <Typography
                className="title"
                variant="body2"
                sx={{ mt: 0.5, color: "text.secondary" }}
              >
                {product.name}
              </Typography>
              <Stack spacing={0.5} sx={{ alignItems: "center" }}>
                <Typography
                  component="ins"
                  variant="subtitle1"
                  sx={{ textDecoration: "none" }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
                {originalPrice && (
                  <Typography
                    component="del"
                    variant="subtitle1"
                    sx={{ color: "grey.400", fontWeight: 400 }}
                  >
                    ${originalPrice}
                  </Typography>
                )}
              </Stack>
              <Rating
                size="small"
                name={`rating-${product.id}`}
                value={product.rating}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default SaleProducts;
