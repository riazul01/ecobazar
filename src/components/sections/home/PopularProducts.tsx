import Grid from "@mui/material/Grid";
import SectionWrapper from "components/sections/SectionWrapper";
import SectionHeader from "components/sections/SectionHeader";
import ProductCard from "components/common/ProductCard";
import { products } from "data/products";

const PopularProducts = () => {
  return (
    <SectionWrapper sx={{ mb: 8 }}>
      <SectionHeader title="Popular Products" path="#!" linkText="View All" />

      <Grid container spacing={2}>
        {products.slice(0, 8).map((item) => (
          <Grid
            key={item.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ mx: "auto", maxWidth: { xs: 320, sm: 1 } }}
          >
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default PopularProducts;
