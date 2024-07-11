import Box from '@mui/material/Box';
// import Hero from 'components/sections/hero';
// import FeaturedServices from 'components/sections/featured-services';
import PopularCategories from 'components/sections/popular-categories';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        {/* <Hero />
        <FeaturedServices /> */}
      </Box>

      <PopularCategories/>
    </>
  );
};

export default Home;
