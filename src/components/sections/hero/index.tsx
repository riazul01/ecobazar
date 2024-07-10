import { Stack } from '@mui/material';
import MainBannar from './MainBannar';
import SummarSale from './SummarSale';
import BestDeal from './BestDeal';

const Hero = () => {
  return (
    <Stack
      mt={2}
      mx="auto"
      px={1.5}
      width={1}
      maxWidth={1332}
      spacing={2}
      direction={{ xs: 'column', md: 'row' }}
    >
      <MainBannar />
      <Stack spacing={2} direction="column" flex={1} height={1} minWidth={320}>
        <SummarSale />
        <BestDeal />
      </Stack>
    </Stack>
  );
};

export default Hero;
