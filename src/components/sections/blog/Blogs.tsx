import { useBreakpoints } from "providers/BreakpointProvider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import FilterIcon from "components/icons/FilterIcon";
import SortBySelect from "components/common/SortBySelect";
import BlogCard from "components/common/BlogCard";
import { blogs } from "data/blogs";

interface ProductItemsProps {
  toggleDrawer: () => void;
}

const Blogs = ({ toggleDrawer }: ProductItemsProps) => {
  const { downLg } = useBreakpoints();

  return (
    <Box sx={{ flex: 1 }}>
      <Stack
        sx={{
          mb: 3,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: 2,
        }}
      >
        {downLg && (
          <Button
            variant="contained"
            size="medium"
            endIcon={<FilterIcon />}
            onClick={toggleDrawer}
          >
            Filter
          </Button>
        )}
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1, color: "text.secondary" }}>
            Sort by:
          </Typography>
          <SortBySelect />
        </Stack>
        <Typography
          variant="body1"
          sx={{
            ml: "auto",
            color: "text.secondary",
            textAlign: "right",
            width: { xs: 1, sm: "auto" },
          }}
        >
          <Typography
            component="span"
            sx={{ color: "text.primary", fontWeight: 600 }}
          >
            52
          </Typography>{" "}
          results found
        </Typography>
      </Stack>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {blogs.slice(0, 10).map((item) => (
          <Grid
            key={item.id}
            size={{ xs: 12, md: 6 }}
            sx={{ placeItems: "center" }}
          >
            <BlogCard key={item.id} data={item} />
          </Grid>
        ))}
        <Pagination
          count={10}
          color="primary"
          size="medium"
          sx={{ mt: 2, mx: "auto" }}
        />
      </Grid>
    </Box>
  );
};

export default Blogs;
