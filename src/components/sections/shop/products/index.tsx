import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import SortBySelect from "./SortBySelect";
import { Grid } from "@mui/material";
import ProductCard from "components/common/ProductCard";
import { products } from "data/products";
import FilterIcon from "components/icons/FilterIcon";
import { useBreakpoints } from "providers/BreakpointProvider";

interface ProductItemsProps {
  toggleDrawer: () => void;
}

const ProductItems = ({ toggleDrawer }: ProductItemsProps) => {
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
        {products.slice(0, 12).map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard />
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

export default ProductItems;
