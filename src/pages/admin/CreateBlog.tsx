import SectionWrapper from "components/sections/SectionWrapper";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import CreateBlogForm from "components/sections/admin/CreateBlogForm";
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
    title: "Create Blog",
    active: true,
  },
];

const CreateBlog = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <SectionWrapper>
          <CreateBlogForm />
        </SectionWrapper>
      </Box>
    </>
  );
};

export default CreateBlog;
