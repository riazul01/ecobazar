import { Link as RouterLink } from "react-router";
import type { Blog } from "data/blogs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Iconify from "components/base/Iconify";
import { paths } from "routes/paths";

interface BlogCardProps {
  data: Blog;
}

const BlogCard = ({ data }: BlogCardProps) => {
  const detailLink = paths.blogDetails(data.id);
  const fallbackImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80";

  return (
    <Card
      sx={{
        position: "relative",
        width: 1,
        maxWidth: { xs: 400, lg: 1 },
        height: 456,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Box
        component={RouterLink}
        to={detailLink}
        sx={{
          position: "relative",
          display: "block",
          textDecoration: "none",
          color: "inherit",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height={300}
          image={data.image || fallbackImage}
          alt={data.title}
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: "6px !important",
            borderTopRightRadius: "6px !important",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />
        <Stack
          direction="column"
          sx={{
            height: 65,
            width: 65,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 12,
            left: 12,
            borderRadius: 1,
            bgcolor: "grey.200",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            {data.publishDate.split(" ")[0]}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.disabled", textTransform: "uppercase" }}
          >
            {data.publishDate.split(" ")[1]}
          </Typography>
        </Stack>
      </Box>

      <CardContent sx={{ px: 1.75, pt: 2, pb: 0.75 }}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Stack
            spacing={0.5}
            sx={{ color: "text.disabled", alignItems: "center" }}
          >
            <Iconify icon="ph:tag" />
            <Typography variant="body2" noWrap>
              {data.tags[0] || data.category || "Healthy"}
            </Typography>
          </Stack>

          <Stack
            spacing={0.5}
            sx={{ color: "text.disabled", alignItems: "center" }}
          >
            <Iconify icon="ant-design:user-outlined" />
            <Typography variant="body2" noWrap>
              By {data.author}
            </Typography>
          </Stack>

          <Stack
            spacing={0.5}
            sx={{ color: "text.disabled", alignItems: "center" }}
          >
            <Iconify icon="bytesize:message" />
            <Typography variant="body2" noWrap>
              {data.comments} Comments
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ mt: 1 }}>
          <Typography
            component={RouterLink}
            to={detailLink}
            variant="h5"
            sx={(theme) => ({
              color: "text.primary",
              textDecoration: "none",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: theme.transitions.create("all", {
                duration: 300,
                easing: theme.transitions.easing.easeInOut,
              }),
              "&:hover": { color: "primary.main" },
            })}
          >
            {data.title}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          component={RouterLink}
          to={detailLink}
          variant="text"
          size="medium"
          endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
          sx={{ ml: -2.25 }}
          disableRipple
        >
          Read now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
