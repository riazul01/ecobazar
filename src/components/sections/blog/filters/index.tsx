import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FilterIcon from "components/icons/FilterIcon";
import SearchBox from "components/common/SearchBox";
import TopCategories from "./TopCategories";
import PopularTags from "./PopularTags";
import OurGallery from "./OurGallery";
import RecentlyAdded from "./RecentlyAdded";

const Filters = () => {
  return (
    <Box sx={{ width: { xs: 1, lg: 424 }, flexShrink: 0 }}>
      <Button
        variant="contained"
        size="medium"
        endIcon={<FilterIcon />}
        sx={{ mb: 2 }}
      >
        Filter
      </Button>
      <SearchBox />
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
