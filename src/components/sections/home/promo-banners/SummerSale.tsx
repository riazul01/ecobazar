import Chip, { chipClasses } from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Banner from "components/common/Banner";
import Iconify from "components/base/Iconify";
import { FruitsBg } from "data/images";
import { yellow } from "theme/colors";

const SummerSale = () => {
  return (
    <Banner
      bgImage={FruitsBg}
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
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Summer Sale
      </Typography>
      <Typography variant="h2" sx={{ mt: 2, textAlign: "center" }}>
        100% Fresh Fruit
      </Typography>

      <Stack
        spacing={1.25}
        sx={{ mt: 2, alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          Up to
        </Typography>
        <Chip
          label="64% OFF"
          size="medium"
          color="secondary"
          sx={{
            borderRadius: 1,
            [`& .${chipClasses.label}`]: {
              color: yellow[500],
              fontSize: "body1.fontSize",
              fontWeight: 600,
            },
          }}
        />
      </Stack>

      <Stack sx={{ mt: 3.5, justifyContent: "center" }}>
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

export default SummerSale;
