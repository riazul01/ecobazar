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

const ProductCard = () => {
  const addedToCart = false;

  return (
    <Card
      sx={{
        position: "relative",
        outline: 1,
        outlineColor: "divider",
        borderRadius: 2,
      }}
    >
      <Box sx={{ position: "relative", cursor: "pointer" }}>
        <CardMedia
          component="img"
          image={`https://images.pexels.com/photos/35974369/pexels-photo-35974369/free-photo-of-fresh-organic-vegetables-and-fruits-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt="product_image"
          height={240}
          sx={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
        />
        <Chip
          label="30% OFF"
          size="small"
          color="error"
          sx={{ position: "absolute", top: 10, right: 10 }}
        />
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

      <CardContent>
        <Stack
          spacing={1}
          direction="column"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            component={Link}
            href="#!"
            variant="h6"
            color="primary.dark"
          >
            Chinese cabbage
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Rating
              name="half-rating-read"
              size="small"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <Typography
              variant="body2"
              sx={{ color: "neutral.lighter", fontWeight: 500 }}
            >
              (4.2k)
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="neutral.lighter">
            1 kg
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              component="ins"
              variant="h6"
              sx={{ textDecoration: "none" }}
            >
              $60
            </Typography>
            <Typography
              component="del"
              variant="h6"
              sx={{ color: "grey.400", fontWeight: 500 }}
            >
              $80
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        {!addedToCart ? (
          <Button
            variant="contained"
            size="medium"
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
            sx={{
              width: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              sx={(theme) => ({
                background: `${theme.palette.grey[100]} !important`,
              })}
            >
              <Iconify icon="mingcute:minimize-line" />
            </IconButton>
            <Button
              variant="text"
              sx={(theme) => ({
                px: 0,
                bgcolor: `${theme.palette.grey[100]} !important`,
              })}
              fullWidth
              disableRipple
            >
              10 in Cart
            </Button>
            <IconButton
              size="large"
              sx={(theme) => ({
                background: `${theme.palette.grey[100]} !important`,
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
