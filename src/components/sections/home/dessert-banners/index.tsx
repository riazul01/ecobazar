import SectionWrapper from "components/sections/SectionWrapper";
import FreshMilk from "./FreshMilk";
import Stack from "@mui/material/Stack";
import SoftDrink from "./SoftDrink";
import QuickBreakfast from "./QuickBreakfast";

const DessertBanners = () => {
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
      <FreshMilk />
      <SoftDrink />
      <QuickBreakfast />
    </SectionWrapper>
  );
};

export default DessertBanners;
