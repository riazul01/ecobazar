import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Image from "components/base/Image";
import { IntroImg } from "data/images";

const AboutIntro = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        py: 10,
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Box sx={{ width: 1, maxWidth: { sm: "80%", md: "70%", lg: "50%" } }}>
        <Typography
          variant="h1"
          sx={{ mb: 3, fontSize: { lg: "display3.fontSize" } }}
        >
          100% Trusted <br /> Organic Food Store
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          We are dedicated to bringing fresh, organic, and responsibly sourced
          groceries to your table. By partnering with trusted farmers and
          producers, we ensure every product meets our high standards for
          quality, sustainability, and nutrition. Our mission is simple: make
          healthy eating accessible while supporting a greener future for our
          communities.
        </Typography>
      </Box>
      <Image
        src={IntroImg}
        sx={{
          width: 1,
          maxWidth: { sm: "80%", md: "70%", lg: "50%" },
          borderRadius: 2,
        }}
      />
    </SectionWrapper>
  );
};

export default AboutIntro;
