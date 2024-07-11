import { Box, Grid } from '@mui/material';
import CategoryCard from './CategoryCard';
import SectionHeader from 'components/common/SectionHeader';

const PopularCategories = () => {
  return (
    <Box mt={5} mx="auto" width={1} maxWidth={1320}>
      <SectionHeader title='Popular Categories' path="#!" linkText='View All'/>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
        <Grid item xs={2}>
          <CategoryCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularCategories;
