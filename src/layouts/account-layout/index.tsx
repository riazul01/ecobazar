import type { PropsWithChildren } from "react";
import Navigation from "layouts/account-layout/Navigation";
import SectionWrapper from "components/sections/SectionWrapper";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";

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
    title: "Dashboard",
    active: true,
  },
];

const AccountLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper
        sx={{
          pt: 4,
          pb: 10,
          display: "flex",
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <Navigation />
        {children}
      </SectionWrapper>
    </>
  );
};

export default AccountLayout;
