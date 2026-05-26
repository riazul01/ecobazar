import Stack from "@mui/material/Stack";
import SectionWrapper from "components/sections/SectionWrapper";
import MainBanner from "./MainBanner";
import SummerSale from "./SummerSale";
import BestDeal from "./BestDeal";

const Hero = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        my: 2.5,
        mx: "auto",
        width: 1,
        flexDirection: { xs: "column", md: "row" },
        gap: 2.5,
      }}
    >
      <MainBanner />
      <Stack
        sx={{ flexDirection: "column", gap: 2.5, minWidth: { xs: 1, md: 420 } }}
      >
        <SummerSale />
        <BestDeal />
      </Stack>
    </SectionWrapper>
  );
};

export default Hero;
