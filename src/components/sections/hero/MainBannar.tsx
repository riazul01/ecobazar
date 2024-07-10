import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Bannar from 'components/common/Bannar';
import IconifyIcon from 'components/base/IconifyIcon';
import heroImage from 'assets/images/backgrounds/hero.png';

const MainBannar = () => {
  return (
    <Bannar bgImage={heroImage} sx={{ p: { xs: 3.5, md: 7 }, flex: 2, height: 600 }}>
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
  );
};

export default MainBannar;
