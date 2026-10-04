import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router";
import Navigation from "layouts/account-layout/Navigation";
import SectionWrapper from "components/sections/SectionWrapper";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";

const getBreadcrumbTitle = (pathname: string) => {
  if (pathname.includes("order-history")) return "Order History";
  if (pathname.includes("order-details")) return "Order Details";
  if (pathname.includes("settings")) return "Settings";
  if (pathname.includes("product-upload")) return "Upload Product";
  if (pathname.includes("create-blog")) return "Create Blog";
  return "Dashboard";
};

const AccountLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const currentTitle = getBreadcrumbTitle(pathname);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      id: 1,
      icon: "mdi-light:home",
      link: "/",
    },
    {
      id: 2,
      title: "Account",
      link: "/account",
    },
    {
      id: 3,
      title: currentTitle,
      active: true,
    },
  ];

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper
        sx={{
          pt: { xs: 3, md: 4 },
          pb: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Navigation />
        <Box sx={{ flex: 1, minWidth: 0, width: 1 }}>{children}</Box>
      </SectionWrapper>
    </>
  );
};

export default AccountLayout;
