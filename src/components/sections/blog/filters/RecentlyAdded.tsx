import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilterWrapper from "./FilterWrapper";
import Image from "components/base/Image";
import CalendarIcon from "components/icons/CalendarIcon";
import { gallery1, gallery2, gallery3 } from "data/images";
import Link from "@mui/material/Link";

const recentPosts = [
  {
    image: gallery1,
    title: "Curabitur porttitor orci eget nequ accumsan.",
    date: "Apr 25, 2021",
  },
  {
    image: gallery2,
    title: "Donec mattis arcu faucibus suscipit viverra.",
    date: "Apr 25, 2021",
  },
  {
    image: gallery3,
    title: "Quisque posuere tempus rutrum. Integer velit ex.",
    date: "Apr 25, 2021",
  },
];

const RecentlyAdded = () => {
  return (
    <FilterWrapper title="Recently Added">
      {recentPosts.map((post) => (
        <Stack
          key={post.title}
          component={Link}
          spacing={2}
          sx={{
            alignItems: "flex-start",
            mb: 2.5,

            "&:hover .title": {
              color: "primary.main",
            },
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            sx={{
              width: 100,
              height: 77,
              borderRadius: 2,
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          <Stack direction="column" spacing={1}>
            <Typography
              variant="subtitle1"
              className="title"
              sx={{
                color: "text.primary",
                textWrapMode: "wrap",
                lineHeight: 1.4,
                fontWeight: 500,
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
              <Typography variant="body2">{post.date}</Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </FilterWrapper>
  );
};

export default RecentlyAdded;
