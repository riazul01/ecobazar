import { Box, Chip, Stack, Typography, Button, Paper } from '@mui/material';
import heroImage from 'assets/images/backgrounds/bannar1.png';
import heroImage2 from 'assets/images/backgrounds/bannar2.png';
import heroImage3 from 'assets/images/backgrounds/bannar3.png';
import Bannar from 'components/common/Bannar';
import IconifyIcon from 'components/base/IconifyIcon';
import customShadows from 'theme/shadows';

const Home = () => {
  return (
    <>
      <Stack mt={2} mx="auto" width={1} maxWidth={1320} height={600} spacing={2}>
        <Bannar bgImage={heroImage} sx={{ p: 7, flex: 2 }}>
          <Stack direction="column" justifyContent="center" height={1} spacing={3.5}>
            <Typography variant="h1" color="info.lighter" lineHeight={1.25} fontWeight={600}>
              Fresh & Healthy <br />
              Organic Food
            </Typography>

            <Box pl={1.5} borderLeft={3} borderColor="primary.light">
              <Stack spacing={1.25} alignItems="center">
                <Typography variant="h6" color="info.lighter" fontWeight={500}>
                  Sale up to
                </Typography>
                <Chip label="30% OFF" size="medium" color="warning" />
              </Stack>
              <Typography mt={1} variant="body2" color="neutral.lighter">
                Free shipping on all your order.
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="medium"
              endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
              sx={{ width: 184 }}
            >
              Shop now
            </Button>
          </Stack>
        </Bannar>

        <Stack spacing={2} direction="column" flex={1} height={1}>
          <Bannar bgImage={heroImage2} sx={{ height: 1, p: 3.5 }}>
            <Typography
              variant="body2"
              textTransform="uppercase"
              fontWeight={500}
              letterSpacing={0.5}
            >
              Summer Sale
            </Typography>
            <Typography
              mt={1}
              variant="h3"
              textTransform="uppercase"
              fontWeight={600}
              letterSpacing={0.5}
            >
              75% OFF
            </Typography>
            <Typography
              mt={2}
              variant="body2"
              color="text.secondary"
              fontWeight={400}
              letterSpacing={0.5}
            >
              Only Fruit & Vegetable
            </Typography>
            <Button
              variant="text"
              size="medium"
              endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
              sx={{ mt: 2, ml: -2.5 }}
            >
              Shop now
            </Button>
          </Bannar>
          <Bannar
            bgImage={heroImage3}
            sx={{
              height: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" color="info.lighter" textTransform="uppercase">
              Best Deal
            </Typography>
            <Typography mt={1} variant="h3" color="info.lighter" lineHeight={1.25} fontWeight={600}>
              Special Products <br /> Deal of the Month
            </Typography>
            <Button
              variant="text"
              size="medium"
              endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
              sx={{ mt: 2 }}
            >
              Shop now
            </Button>
          </Bannar>
        </Stack>
      </Stack>

      <Stack
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
    </>
  );
};

export default Home;
