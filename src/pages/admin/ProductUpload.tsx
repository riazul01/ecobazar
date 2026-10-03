import SectionWrapper from "components/sections/SectionWrapper";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import ProductUploadForm from "components/sections/admin/ProductUploadForm";
import Box from "@mui/material/Box";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 2,
    title: "Admin",
    link: "#!",
  },
  {
    id: 3,
    title: "Product Upload",
    active: true,
  },
];

const ProductUpload = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <SectionWrapper>
          <ProductUploadForm />
        </SectionWrapper>
      </Box>
    </>
  );
};

export default ProductUpload;
