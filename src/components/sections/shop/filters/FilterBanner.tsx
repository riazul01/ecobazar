import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { FilterBannerBg } from "data/images";

const FilterBanner = () => {
  return (
    <Banner
      component={Stack}
      bgImage={FilterBannerBg}
      sx={{
        p: 2.5,
        mb: 2.5,
        flexGrow: 1,
        height: 295,
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 400, textAlign: "center" }}>
        <Typography
          component="span"
          sx={{
            fontSize: "h3.fontSize",
            color: "warning.main",
            fontWeight: 600,
          }}
        >
          79%
        </Typography>{" "}
        Discount
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", textAlign: "center" }}
      >
        on your first order
      </Typography>
      <Button
        variant="text"
        size="medium"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ mx: "auto" }}
      >
        Shop now
      </Button>
    </Banner>
  );
};

export default FilterBanner;
