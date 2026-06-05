import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const productData = [
  {
    id: 1,
    title: "Red Capsicum",
    image:
      "https://images.pexels.com/photos/35974369/pexels-photo-35974369/free-photo-of-fresh-organic-vegetables-and-fruits-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Fresh red capsicum on display",
    price: "$60.00",
    originalPrice: "$80.00",
    rating: 3,
  },
  {
    id: 2,
    title: "Organic Bananas",
    image:
      "https://images.pexels.com/photos/2288693/pexels-photo-2288693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Bunch of ripe organic bananas",
    price: "$12.00",
    originalPrice: "$15.00",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Fresh Strawberries",
    image:
      "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Fresh juicy strawberries",
    price: "$24.00",
    originalPrice: "$30.00",
    rating: 5,
  },
];

const SaleProducts = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 500 }}>
        Sale Products
      </Typography>
      {productData.map((product, index) => (
        <Card
          key={product.id}
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: index !== 2 ? 1.75 : 0,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
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
            alt={product.alt}
            sx={{
              width: 102,
              aspectRatio: "1/1",
              borderTopLeftRadius: `6px !important`,
              borderBottomLeftRadius: `6px !important`,
            }}
          />
          <CardContent sx={{ p: "0 !important" }}>
            <Typography
              className="title"
              variant="body2"
              sx={{ mt: 0.5, color: "text.secondary" }}
            >
              {product.title}
            </Typography>
            <Stack spacing={0.5} sx={{ alignItems: "center" }}>
              <Typography
                component="ins"
                variant="subtitle1"
                sx={{ textDecoration: "none" }}
              >
                {product.price}
              </Typography>
              <Typography
                component="del"
                variant="subtitle1"
                sx={{ color: "grey.400", fontWeight: 400 }}
              >
                {product.originalPrice}
              </Typography>
            </Stack>
            <Rating
              size="small"
              name="half-rating"
              defaultValue={product.rating}
              readOnly
            />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default SaleProducts;
