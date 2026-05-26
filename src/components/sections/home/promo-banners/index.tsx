import SectionWrapper from "components/sections/SectionWrapper";
import Stack from "@mui/material/Stack";
import BestDeals from "./BestDeals";
import FatFree from "./FatFree";
import SummerSale from "./SummerSale";

const BannerGroup = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        mb: 8,
        justifyContent: { xs: "center", xl: "space-between" },
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <BestDeals />
      <FatFree />
      <SummerSale />
    </SectionWrapper>
  );
};

export default BannerGroup;
