import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import CheckLightIcon from "components/icons/CheckLightIcon";
import Iconify from "components/base/Iconify";
import Image from "components/base/Image";
import { DeliveryImg } from "data/images";

const deliveryBenefits = [
  { id: 1, text: "Fast and reliable delivery right to your doorstep." },
  { id: 2, text: "Quality checked groceries packed with care and attention." },
  { id: 3, text: "100% organic and responsibly sourced ingredients." },
];

const FastDelivery = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "flex-end" },
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Box
        sx={{ py: 10, width: 1, maxWidth: { sm: "80%", md: "70%", lg: "50%" } }}
      >
        <Typography
          variant="h1"
          sx={{ mb: 3, fontSize: { lg: "display3.fontSize" } }}
        >
          We Delivered, You <br /> Enjoy Your Order.
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          From farm fresh produce to everyday organic essentials, every order is
          carefully packed and delivered to your doorstep with quality and
          freshness in mind. Enjoy a convenient shopping experience backed by
          trusted sourcing, reliable delivery, and a commitment to healthier
          living.
        </Typography>
        {deliveryBenefits.map((item) => (
          <Stack key={item.id} sx={{ alignItems: "center", gap: 1, mb: 2 }}>
            <CheckLightIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ color: "text.secondary" }}>
              {item.text}
            </Typography>
          </Stack>
        ))}
        <Button
          variant="contained"
          color="primary"
          size="medium"
          endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
          sx={{ mt: 3.25, width: 170 }}
        >
          Shop now
        </Button>
      </Box>
      <Image
        src={DeliveryImg}
        sx={{
          width: 1,
          maxWidth: { sm: "80%", md: "70%", lg: "50%" },
          borderRadius: 2,
        }}
      />
    </SectionWrapper>
  );
};

export default FastDelivery;
