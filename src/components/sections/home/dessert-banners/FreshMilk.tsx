import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { FreshMilkBg } from "data/images";

const FreshMilk = () => {
  return (
    <Banner
      bgImage={FreshMilkBg}
      sx={{ flexGrow: 1, p: 3, height: 255, minWidth: { xs: 1, sm: 400 } }}
    >
      <Typography
        variant="h2"
        sx={{ mt: 2, mb: 1, color: "white", letterSpacing: 0.5 }}
      >
        100% Fresh <br /> Cow Milk
      </Typography>
      <Typography
        variant="body1"
        sx={(theme) => ({
          mb: 2,
          color: alpha(theme.palette.common.white, 0.8),
          letterSpacing: 0.5,
        })}
      >
        Starting at{" "}
        <Typography
          component="span"
          sx={{ fontSize: "h5.fontSize", color: "white", fontWeight: 500 }}
        >
          $14.99
        </Typography>
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

export default FreshMilk;
