import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import Filters from "components/sections/shop/filters";
import Products from "components/sections/shop/products";
import SectionWrapper from "components/sections/SectionWrapper";
import Stack from "@mui/material/Stack";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 3,
    title: "Shop",
    active: true,
  },
];

const Shop = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper component={Stack} sx={{ py: 3, gap: 3 }}>
        <Filters />
        <Products />
      </SectionWrapper>
    </>
  );
};

export default Shop;
