import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { SummerSaleBg } from "data/images";

const SummerSale = () => {
  return (
    <Banner bgImage={SummerSaleBg} sx={{ flexGrow: 1, p: 3.5 }}>
      <Typography
        variant="body2"
        sx={{ textTransform: "uppercase", fontWeight: 500, letterSpacing: 0.5 }}
      >
        Summer Sale
      </Typography>
      <Typography
        variant="h3"
        sx={{ mt: 1, textTransform: "uppercase", letterSpacing: 0.5 }}
      >
        75% OFF
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: "text.secondary",
          fontWeight: 400,
          letterSpacing: 0.5,
        }}
      >
        Only Fruit & Vegetable
      </Typography>
      <Button
        variant="text"
        size="medium"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ mt: 2, ml: -3 }}
      >
        Shop now
      </Button>
    </Banner>
  );
};

export default SummerSale;
