import { blogs } from "data/blogs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BlogCard from "components/common/BlogCard";
import SectionWrapper from "../SectionWrapper";

const LatestNews = () => {
  return (
    <SectionWrapper sx={{ mb: 8 }}>
      <Typography
        variant="h2"
        sx={{ mb: 1, textAlign: "center", fontWeight: 600 }}
      >
        Latest News
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mx: "auto",
          color: "text.secondary",
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        Explore our latest posts for tips, trends, and insights to enhance your
        grocery shopping and healthy eating experience.
      </Typography>

      <Stack
        spacing={1.5}
        sx={{
          mt: 3,
          justifyContent: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      >
        {blogs.slice(0, 3).map((item) => (
          <BlogCard data={item} />
        ))}
      </Stack>
    </SectionWrapper>
  );
};

export default LatestNews;
