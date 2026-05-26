import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { BestDealBg } from "data/images";

const BestDeal = () => {
  return (
    <Banner
      component={Stack}
      bgImage={BestDealBg}
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ mt: 2, color: "white", textTransform: "uppercase" }}
      >
        Best Deal
      </Typography>
      <Typography variant="h3" sx={{ mt: 1, color: "white", lineHeight: 1.25 }}>
        Special Products <br /> Deal of the Month
      </Typography>
      <Button
        variant="text"
        size="medium"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ mt: 2 }}
      >
        Shop now
      </Button>
    </Banner>
  );
};

export default BestDeal;
