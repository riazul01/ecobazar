import Box from "@mui/material/Box";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner from "components/common/Banner";
import Iconify from "components/base/Iconify";
import { HeroBg } from "data/images";

const MainBannar = () => {
  return (
    <Banner
      component={Stack}
      bgImage={HeroBg}
      sx={{
        p: { xs: 3.5, md: 7 },
        flex: { xs: "none", md: 1 },
        minHeight: { xs: 400, md: 600 },
        backgroundPosition: "15%",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3.5,
      }}
    >
      <Typography
        variant="display3"
        sx={{
          color: "white",
          lineHeight: 1.25,
          fontSize: {
            xs: "h2.fontSize",
            sm: "h1.fontSize",
            md: "display3.fontSize",
          },
        }}
      >
        Fresh & Healthy <br />
        Organic Food
      </Typography>

      <Box sx={{ pl: 1.5, borderLeft: 3, borderColor: "primary.light" }}>
        <Stack spacing={1.25} sx={{ alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: 500 }}>
            Sale up to
          </Typography>
          <Chip
            label="30% OFF"
            color="warning"
            sx={{
              borderRadius: 1,
              [`& .${chipClasses.label}`]: {
                fontSize: "body1.fontSize",
                fontWeight: 600,
              },
            }}
          />
        </Stack>
        <Typography variant="body2" sx={{ mt: 1, color: "grey.300" }}>
          Free shipping on all your order.
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ width: 180 }}
      >
        Shop now
      </Button>
    </Banner>
  );
};

export default MainBannar;
