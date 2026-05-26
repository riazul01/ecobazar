import SectionWrapper from "components/sections/SectionWrapper";
import { testimonials } from "data/testimonials";
import TestimonialSlider from "./TestimonialSlider";
import Stack from "@mui/material/Stack";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Stack sx={{ bgcolor: "grey.100" }}>
      <SectionWrapper sx={{ py: 7 }}>
        <TestimonialSlider
          title="Client Testimonials"
          SliderCard={TestimonialCard}
          data={testimonials}
        />
      </SectionWrapper>
    </Stack>
  );
};

export default Testimonials;
