import { Box, Stack, Grid, Button, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import CategoryCard from './CategoryCard';

const PopularCategories = () => {
  return (
    <Box mt={5} mx="auto" width={1} maxWidth={1320}>
      <Stack justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Popular Categories</Typography>
        <Button
          variant="text"
          endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
          sx={{ pr: 0 }}
        >
          View All
        </Button>
      </Stack>

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
