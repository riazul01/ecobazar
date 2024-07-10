import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import Bannar from 'components/common/Bannar';
import bannarImage from 'assets/images/backgrounds/best-deal.png';

const BestDeal = () => {
  return (
    <Bannar
      bgImage={bannarImage}
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography mt={2} variant="body2" color="info.lighter" textTransform="uppercase">
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
  );
};

export default BestDeal;
