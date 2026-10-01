import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Image from "components/base/Image";
import Iconify from "components/base/Iconify";
import video from "assets/video.webp";
import PriceTagIcon from "components/icons/PriceTagIcon";
import LeafLightIcon from "components/icons/LeafLightIcon";

type BenefitItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const benefits: BenefitItem[] = [
  {
    icon: <PriceTagIcon />,
    title: "64% Discount",
    description: "Save your 64% money with us",
  },
  {
    icon: <LeafLightIcon />,
    title: "100% Organic",
    description: "100% Organic Vegetables",
  },
];

const keyFeatures = [
  "Rich in Vitamin C, Vitamin K, and powerful antioxidants for immunity.",
  "Crisp, sweet, and succulent flavor ideal for salads, stir-fries, and soups.",
  "Cultivated sustainably using 100% organic compost and renewable water systems.",
  "Packed with high dietary fiber and essential minerals for healthy digestion.",
  "Zero chemical pesticides, non-GMO verified, and freshly picked upon order.",
];

const Descriptions = () => {
  return (
    <Grid container spacing={{ xs: 4, lg: 6 }}>
      {/* Left Text & Features */}
      <Grid size={{ xs: 12, md: 6.3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Freshness & Nutritional Excellence
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}
        >
          Our Chinese Cabbage is hand-selected from certified organic farms
          where fertile soils and natural sunshine cultivate crisp, tender
          leaves with an irresistible natural sweetness. Packed with hydration
          and essential micronutrients, it provides a versatile foundation for
          healthy culinary creations.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}
        >
          Whether prepared raw in crunchy slaws, simmered in comforting broths,
          or fermented into traditional kimchi, each head is harvested at peak
          maturity and stored in temperature-controlled environments to
          guarantee farm-to-table freshness.
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Key Quality & Health Highlights:
        </Typography>

        <Stack direction="column" sx={{ gap: 1.5 }}>
          {keyFeatures.map((feature, index) => (
            <Stack key={index} sx={{ alignItems: "flex-start", gap: 1.5 }}>
              <Iconify
                icon="solar:check-circle-bold"
                sx={{
                  color: "primary.main",
                  fontSize: 20,
                  mt: 0.25,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>

      {/* Right Video & Benefits */}
      <Grid size={{ xs: 12, md: 5.7 }}>
        <Stack direction="column" sx={{ gap: 3 }}>
          <Box
            sx={{
              position: "relative",
              width: 1,
              height: { xs: 240, sm: 290, md: 320 },
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Image
              src={video}
              alt="Farm video preview"
              sx={{ width: 1, height: 1, objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              width: 1,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              px: 2.5,
              py: 3,
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-around",
                gap: 2,
              }}
            >
              {benefits.map((benefit) => (
                <Stack
                  key={benefit.title}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    alignItems: "center",
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "success.main",
                    }}
                  >
                    {benefit.icon}
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      {benefit.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "13px",
                        color: "text.secondary",
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Descriptions;
