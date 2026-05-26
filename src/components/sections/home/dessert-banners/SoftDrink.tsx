import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import Banner from "components/common/Banner";
import { SoftDrinkBg } from "data/images";

const SoftDrink = () => {
  return (
    <Banner
      component={Stack}
      bgImage={SoftDrinkBg}
      sx={{ flexGrow: 1, p: 3, height: 255, justifyContent: "flex-end" }}
    >
      <Box sx={{ mt: 2, maxWidth: 240 }}>
        <Typography
          variant="subtitle2"
          sx={{ mb: 1, textTransform: "uppercase" }}
        >
          Drink Sale
        </Typography>
        <Typography variant="h2" sx={{ mb: 2.5, letterSpacing: 0.5 }}>
          Water & <br /> Soft Drink
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
      </Box>
    </Banner>
  );
};

export default SoftDrink;
