import { Box, Grid, Link } from '@mui/material';
import CategoryCard from './CategoryCard';
import SectionHeader from 'components/common/SectionHeader';
import { categories } from 'data/categories';

const PopularCategories = () => {
  return (
    <Box mt={5}>
      <SectionHeader title="Popular Categories" path="#!" linkText="View All" />

      <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid component={Link} href={item.path} item xs={2}>
            <CategoryCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularCategories;
