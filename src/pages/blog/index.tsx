import { useState } from "react";
import Stack from "@mui/material/Stack";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import Filters from "components/sections/blog/filters";
import SectionWrapper from "components/sections/SectionWrapper";
import FiltersDrawer from "components/sections/shop/FiltersDrawer";
import { useBreakpoints } from "providers/BreakpointProvider";
import Blogs from "components/sections/blog/Blogs";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 3,
    title: "Blog",
    active: true,
  },
];

const Blog = () => {
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
        <Blogs toggleDrawer={toggleDrawer} />
      </SectionWrapper>
      <FiltersDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Blog;
