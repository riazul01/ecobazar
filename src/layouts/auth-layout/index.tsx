import type { ReactNode } from "react";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import SectionWrapper from "components/sections/SectionWrapper";

interface AuthLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
}

const AuthLayout = ({ breadcrumbs, children }: AuthLayoutProps) => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper sx={{ py: 10 }}>{children}</SectionWrapper>
    </>
  );
};

export default AuthLayout;
