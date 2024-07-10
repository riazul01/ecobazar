import FeaturedServices from 'components/sections/featured-services';
import Hero from 'components/sections/hero';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        <Hero />
      </Box>
      <FeaturedServices />

      {/* <PopularCategories/> */}
    </>
  );
};

export default Home;
