import { useState } from "react";
import Stack from "@mui/material/Stack";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import Filters from "components/sections/shop/filters";
import Products from "components/sections/shop/Products";
import SectionWrapper from "components/sections/SectionWrapper";
import FiltersDrawer from "components/sections/shop/FiltersDrawer";
import { useBreakpoints } from "providers/BreakpointProvider";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { downLg } = useBreakpoints();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper component={Stack} sx={{ py: 3, gap: 3 }}>
        {!downLg ? <Filters /> : null}
        <Products toggleDrawer={toggleDrawer} />
      </SectionWrapper>
      <FiltersDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Shop;
