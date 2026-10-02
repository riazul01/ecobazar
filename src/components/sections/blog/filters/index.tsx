import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FilterIcon from "components/icons/FilterIcon";
import BlogSearchBox from "./BlogSearchBox";
import TopCategories from "./TopCategories";
import PopularTags from "./PopularTags";
import OurGallery from "./OurGallery";
import RecentlyAdded from "./RecentlyAdded";

interface FiltersProps {
  showFilterButton?: boolean;
}

const Filters = ({ showFilterButton = false }: FiltersProps) => {
  return (
    <Box sx={{ width: { xs: 1, lg: 380, xl: 424 }, flexShrink: 0 }}>
      {showFilterButton && (
        <Button
          variant="contained"
          size="medium"
          endIcon={<FilterIcon />}
          sx={{ mb: 2 }}
        >
          Filter
        </Button>
      )}
      <BlogSearchBox />
      <Divider sx={{ my: 3 }} />
      <TopCategories />
      <Divider sx={{ my: 3 }} />
      <PopularTags />
      <Divider sx={{ my: 3 }} />
      <OurGallery />
      <Divider sx={{ my: 3 }} />
      <RecentlyAdded />
    </Box>
  );
};

export default Filters;
