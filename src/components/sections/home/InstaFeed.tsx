import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import Image from "components/base/Image";

const instaFeeds = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1697346327617-c333613a349a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1622576454275-729fbf6aa6eb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1583499236879-0edd222abc80?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#!",
  },
];

const InstaFeed = () => {
  return (
    <SectionWrapper sx={{ mb: 7 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
        Follow us on Instagram
      </Typography>
      <Grid container spacing={2}>
        {instaFeeds.map((feed) => (
          <Grid
            key={feed.id}
            component={Link}
            href={feed.link}
            size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
          >
            <Box
              key={feed.id}
              sx={{
                position: "relative",
                width: "auto",
                height: 200,
                borderRadius: 1.5,
                overflow: "hidden",
              }}
            >
              <Image
                src={feed.image}
                sx={{ width: 1, height: 1, objectFit: "cover" }}
              />
              <Stack
                sx={(theme) => ({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(theme.palette.common.black, 0.5),
                  zIndex: 999,
                  opacity: 0,
                  "&:hover": { opacity: 1 },
                  transition: theme.transitions.create("all", {
                    duration: 200,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                })}
              >
                <Iconify
                  icon="radix-icons:instagram-logo"
                  sx={{ color: "white", fontSize: 28 }}
                />
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default InstaFeed;
