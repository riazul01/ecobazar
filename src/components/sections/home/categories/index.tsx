import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CategoryItem from "./CategoryItem";
import SectionHeader from "components/sections/SectionHeader";
import SectionWrapper from "components/sections/SectionWrapper";
import { categories } from "data/categories";

const Categories = () => {
  return (
    <SectionWrapper sx={{ mb: 8 }}>
      <SectionHeader title="Popular Categories" path="#!" linkText="View All" />

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid
            key={category.id}
            component={Link}
            href={category.path}
            size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          >
            <CategoryItem data={category} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Categories;
