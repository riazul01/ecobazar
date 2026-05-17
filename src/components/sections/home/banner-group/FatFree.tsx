import { Typography, Stack, Button } from "@mui/material";
import Banner from "components/common/Banner";
import Iconify from "components/base/Iconify";
import { MeatBg } from "data/images";

const FatFree = () => {
  return (
    <Banner
      bgImage={MeatBg}
      sx={{
        px: 3,
        py: 4,
        width: 1,
        maxWidth: 424,
        height: 536,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        85% Fat Free
      </Typography>
      <Typography
        variant="h2"
        sx={{ mt: 2, color: "white", textAlign: "center" }}
      >
        Low-Fat Meat
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 2, color: "white", textAlign: "center", fontWeight: 400 }}
      >
        Started at{" "}
        <Typography
          component="span"
          variant="h5"
          sx={{ color: "warning.main", fontWeight: 600 }}
        >
          $79.99
        </Typography>
      </Typography>

      <Stack sx={{ mt: 4, justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
          sx={{ width: 170 }}
        >
          Shop now
        </Button>
      </Stack>
    </Banner>
  );
};

export default FatFree;
