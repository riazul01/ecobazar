import Grid from "@mui/material/Grid";
import Breadcrumb from "components/common/BreadCrumb";
import DetailsTabs from "components/sections/product-details/DetailsTabs";
import ImageSlider from "components/sections/product-details/ImageSlider";
import ProductSummary from "components/sections/product-details/ProductSummary";
import RelatedProducts from "components/sections/product-details/RelatedProducts";
import SectionWrapper from "components/sections/SectionWrapper";
import { paths } from "routes/paths";

const breadcrumbs = [
  { id: 1, icon: "mdi-light:home", link: paths.home },
  { id: 2, title: "Categories", link: paths.shop },
  { id: 3, title: "Vegetables", link: paths.shop },
  { id: 4, title: "Chinese Cabbage", active: true },
];

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <SectionWrapper sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={{ xs: 4, lg: 6 }} sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageSlider />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductSummary />
          </Grid>
        </Grid>

        <DetailsTabs />
        <RelatedProducts />
      </SectionWrapper>
    </>
  );
};

export default ProductDetails;