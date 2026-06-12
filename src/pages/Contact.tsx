import Stack from "@mui/material/Stack";
import ContactForm from "components/sections/contact/ContactForm";
import ContactInfo from "components/sections/contact/ContactInfo";
import SectionWrapper from "components/sections/SectionWrapper";
import type { BreadcrumbItem } from "components/common/BreadCrumb";
import Breadcrumb from "components/common/BreadCrumb";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 3,
    title: "Contact",
    active: true,
  },
];

const Contact = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionWrapper
        component={Stack}
        sx={{
          py: 10,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <ContactInfo />
        <ContactForm />
      </SectionWrapper>
    </>
  );
};

export default Contact;
