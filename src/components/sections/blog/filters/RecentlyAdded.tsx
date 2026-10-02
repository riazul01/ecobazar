import { Link as RouterLink } from "react-router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FilterWrapper from "./FilterWrapper";
import Image from "components/base/Image";
import CalendarIcon from "components/icons/CalendarIcon";
import { blogs } from "data/blogs";
import { paths } from "routes/paths";

const RecentlyAdded = () => {
  const recentPosts = blogs.slice(0, 3);

  return (
    <FilterWrapper title="Recently Added">
      {recentPosts.map((post) => (
        <Stack
          key={post.id}
          component={RouterLink}
          to={paths.blogDetails(post.id)}
          spacing={2}
          sx={{
            alignItems: "flex-start",
            mb: 2.5,
            textDecoration: "none",
            color: "inherit",
            "&:hover .title": {
              color: "primary.main",
            },
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 77,
              borderRadius: 2,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 2,
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.06)",
                },
              }}
            />
          </Box>

          <Stack direction="column" spacing={1} sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              variant="subtitle1"
              className="title"
              sx={{
                color: "text.primary",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.4,
                fontWeight: 500,
                fontSize: "0.875rem",
                transition: (theme) =>
                  theme.transitions.create("color", {
                    duration: 300,
                    easing: theme.transitions.easing.easeInOut,
                  }),
              }}
            >
              {post.title}
            </Typography>

            <Stack
              sx={{
                color: "text.secondary",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <CalendarIcon sx={{ color: "primary.main", fontSize: 16 }} />
              <Typography variant="body2" sx={{ fontSize: "0.8125rem" }}>
                {post.publishDate}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </FilterWrapper>
  );
};

export default RecentlyAdded;
