import SectionWrapper from "components/sections/SectionWrapper";
import BestDeals from "./BestDeals";
import FatFree from "./FatFree";
import SummerSale from "./SummerSale";

const BannerGroup = () => {
  return (
    <SectionWrapper
      sx={{
        mb: 8,
        display: "flex",
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
