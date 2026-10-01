import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Breadcrumb from "components/common/BreadCrumb";
import DetailsTabs from "components/sections/product-details/DetailsTabs";
import ImageSlider from "components/sections/product-details/ImageSlider";
import ProductSummary from "components/sections/product-details/ProductSummary";
import RelatedProducts from "components/sections/product-details/RelatedProducts";
import SectionWrapper from "components/sections/SectionWrapper";
import { paths } from "routes/paths";
import { products, type ProductData } from "data/products";

const defaultProduct: ProductData = products[1] || products[0];

const ProductDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const product: ProductData =
    products.find((item: ProductData) => String(item.id) === String(id)) ||
    defaultProduct;

  const breadcrumbs = [
    { id: 1, icon: "mdi-light:home", link: paths.home },
    { id: 2, title: "Shop", link: paths.shop },
    {
      id: 3,
      title: product.category ? product.category.charAt(0).toUpperCase() + product.category.slice(1) : "Vegetables",
      link: paths.shop,
    },
    { id: 4, title: product.name, active: true },
  ];

  const productImages = [product.image, ...(product.images || [])];

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <SectionWrapper sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={{ xs: 4, lg: 6 }} sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageSlider images={productImages} productName={product.name} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductSummary product={product} />
          </Grid>
        </Grid>

        <DetailsTabs />
        <RelatedProducts />
      </SectionWrapper>
    </>
  );
};

export default ProductDetails;