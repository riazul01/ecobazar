import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { CtaBg } from "data/images";

const CTABanner = () => {
  return (
    <SectionWrapper>
      <Banner
        bgImage={CtaBg}
        sx={{
          mb: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "flex-end" },
          position: "relative",
          height: 320,
        }}
      >
        <Box
          sx={(theme) => ({
            position: "absolute",
            content: '""',
            top: 0,
            left: 0,
            height: 1,
            width: 1,
            bgcolor: alpha(theme.palette.common.black, 0.6),
            display: { xs: "flex", lg: "none" },
          })}
        />
        <Stack
          direction="column"
          sx={{
            alignItems: { xs: "center", lg: "flex-start" },
            width: 1,
            maxWidth: 440,
            zIndex: 99,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "white", textTransform: "uppercase", fontWeight: 500 }}
          >
            Summer Sale
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: 1, color: "white", fontWeight: 400 }}
          >
            <Typography
              variant="h1"
              component="span"
              sx={{ color: "warning.main", fontWeight: 600 }}
            >
              37%
            </Typography>{" "}
            OFF
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1.75,
              color: "grey.400",
              maxWidth: 350,
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
            sx={{ mt: 3.25, width: 170 }}
          >
            Shop now
          </Button>
        </Stack>
      </Banner>
    </SectionWrapper>
  );
};

export default CTABanner;
