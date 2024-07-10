// import { Box, Stack, Typography, Paper } from '@mui/material';
// import IconifyIcon from 'components/base/IconifyIcon';
// import customShadows from 'theme/shadows';
// import PopularCategories from 'components/sections/popular-categories';
import Hero from 'components/sections/hero';

const Home = () => {
  return (
    <>
      <Hero/>

      {/* <Stack
        component={Paper}
        mt={2.5}
        mx="auto"
        width={1}
        maxWidth={1320}
        spacing={2}
        boxShadow={customShadows[0]}
      >
        <Stack flex={1} spacing={2.5} alignItems="center">
          <IconifyIcon icon="la:shipping-fast" fontSize="h2.fontSize" color="primary.main" />
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Customer Support 24/7
            </Typography>
            <Typography mt={0.75} variant="body2" color="text.secondary">
              Instant access to Support
            </Typography>
          </Box>
        </Stack>
        <Stack flex={1} spacing={2.5} alignItems="center">
          <IconifyIcon icon="la:shipping-fast" fontSize="h2.fontSize" color="primary.main" />
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Customer Support 24/7
            </Typography>
            <Typography mt={0.75} variant="body2" color="text.secondary">
              Instant access to Support
            </Typography>
          </Box>
        </Stack>
        <Stack flex={1} spacing={2.5} alignItems="center">
          <IconifyIcon icon="la:shipping-fast" fontSize="h2.fontSize" color="primary.main" />
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Customer Support 24/7
            </Typography>
            <Typography mt={0.75} variant="body2" color="text.secondary">
              Instant access to Support
            </Typography>
          </Box>
        </Stack>
        <Stack flex={1} spacing={2.5} alignItems="center">
          <IconifyIcon icon="la:shipping-fast" fontSize="h2.fontSize" color="primary.main" />
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Customer Support 24/7
            </Typography>
            <Typography mt={0.75} variant="body2" color="text.secondary">
              Instant access to Support
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <PopularCategories/> */}
    </>
  );
};

export default Home;
