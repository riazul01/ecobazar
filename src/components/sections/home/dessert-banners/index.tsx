import SectionWrapper from "components/sections/SectionWrapper";
import Stack from "@mui/material/Stack";
import FreshMilk from "./FreshMilk";
import SoftDrink from "./SoftDrink";
import QuickBreakfast from "./QuickBreakfast";

const DessertBanners = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        mb: 8,
        justifyContent: { xs: "center", xl: "space-between" },
        flexWrap: {xs: "wrap", xl: "nowrap" },
        gap: 2,
      }}
    >
      <FreshMilk />
      <SoftDrink />
      <QuickBreakfast />
    </SectionWrapper>
  );
};

export default DessertBanners;
