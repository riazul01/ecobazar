import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import customShadows from 'theme/shadows';

interface Service {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Free Shipping',
    subtitle: 'Free shipping on all your order',
    icon: 'la:shipping-fast',
  },
  {
    id: 2,
    title: 'Customer Support 24/7',
    subtitle: 'Instant access to Support',
    icon: 'iconoir:headset-help',
  },
  {
    id: 3,
    title: '100% Secure Payment',
    subtitle: 'We ensure your money is save',
    icon: 'bi:bag-check',
  },
  {
    id: 4,
    title: 'Money-Back Guarantee',
    subtitle: '30 Days Money-Back Guarantee',
    icon: 'iconoir:box-iso',
  },
];

const FeaturedServices = () => {
  return (
    <Box
      component={Paper}
      mt={2.5}
      mx={0}
      p={5}
      width={1}
      display="grid"
      gridTemplateColumns={{ xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
      gap={3}
      boxShadow={customShadows[0]}
    >
      {services.map((item) => (
        <Stack key={item.id} alignItems="center" spacing={2.5}>
          <IconifyIcon icon={item.icon} fontSize="h2.fontSize" color="primary.main" />
          <div>
            <Typography variant="body1" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography mt={0.75} variant="body2" color="text.secondary">
              {item.subtitle}
            </Typography>
          </div>
        </Stack>
      ))}
    </Box>
  );
};

export default FeaturedServices;
