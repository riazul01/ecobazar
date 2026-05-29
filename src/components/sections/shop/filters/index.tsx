import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilterIcon from "components/icons/FilterIcon";
import FilterByCategory from "./FilterByCategory";
import PriceRange from "./FilterByPrice";
import FilterByRating from "./FilterByRating";
import FilterByTag from "./FilterByTag";
import FilterBanner from "./FilterBanner";
import SaleProducts from "./SaleProducts";
import Divider from "@mui/material/Divider";

const Filters = () => {
  return (
    <Box sx={{ width: 312 }}>
      <Button
        variant="contained"
        size="medium"
        endIcon={<FilterIcon />}
        sx={{ mb: 2 }}
      >
        Filter
      </Button>
      <FilterByCategory />
      <Divider sx={{ mb: 1.5 }} />
      <PriceRange />
      <Divider sx={{ mb: 1.5 }} />
      <FilterByRating />
      <Divider sx={{ mb: 1.5 }} />
      <FilterByTag />
      <FilterBanner />
      <SaleProducts />
    </Box>
  );
};

export default Filters;
