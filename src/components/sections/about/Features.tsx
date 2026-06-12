import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Image from "components/base/Image";
import { FeaturesImg } from "data/images";
import { features } from "data/features";

const Features = () => {
  return (
    <SectionWrapper
      component={Stack}
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "unset" },
        justifyContent: { xs: "center", lg: "unset" },
        maxWidth: { lg: "unset" },
        px: { xs: 2, lg: 0 },
        gap: 3,
      }}
    >
      <Image
        src={FeaturesImg}
        sx={{
          width: 1,
          maxWidth: { sm: "80%", md: "70%", lg: "50%" },
          objectFit: "cover",
          borderRadius: { xs: 2, lg: 0 },
        }}
      />
      <Box
        sx={{ width: 1, maxWidth: { sm: "80%", md: "70%", lg: "50%" }, py: 10 }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { lg: "display3.fontSize" },
          }}
        >
          100% Trusted <br /> Organic Food Store
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Fresh organic groceries, trusted local sourcing, and a dedication to
          quality come together to create a healthier shopping experience.
          Carefully selected products, sustainable practices, reliable delivery,
          and outstanding customer support make it easier than ever to enjoy
          fresh, nutritious food every day.
        </Typography>
        <Grid container spacing={3}>
          {features.map((item) => (
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={{ alignItems: "center", gap: 2 }}>
                <Stack
                  sx={(theme) => ({
                    height: 72,
                    width: 72,
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: alpha(theme.palette.primary.light, 0.2),
                    borderRadius: "50%",
                  })}
                >
                  {<item.icon sx={{ fontSize: 32, color: "primary.main" }} />}
                </Stack>
                <div>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Features;
