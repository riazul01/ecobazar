import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { DryFruitsBg } from "data/images";

const QuickBreakfast = () => {
  return (
    <Banner bgImage={DryFruitsBg} sx={{ flexGrow: 1, p: 4, height: 255 }}>
      <Typography
        variant="subtitle2"
        sx={{ mt: 2, mb: 1, textTransform: "uppercase" }}
      >
        100% Organic
      </Typography>
      <Typography variant="h2" sx={{ mb: 2.5, letterSpacing: 0.5 }}>
        Quick <br /> Breakfast
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ width: 162 }}
      >
        Shop now
      </Button>
    </Banner>
  );
};

export default QuickBreakfast;
