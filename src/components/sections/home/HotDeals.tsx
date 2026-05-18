import { Box, Stack, Grid, Typography } from "@mui/material";
import ProductCard from "components/common/ProductCard";
import SectionWrapper from "components/sections/SectionWrapper";
import { products } from "data/products";

const HotDeals = () => {
  return (
    <SectionWrapper>
      <Box sx={{ mb: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            mb: 3.5,
            gap: { xs: 2, md: 0 },
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                textAlign: { xs: "center", md: "left" },
                fontWeight: 600,
              }}
            >
              Deals of the Week
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Grab exclusive offers before they're gone.
            </Typography>
          </div>
          <Stack
            spacing={0.5}
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              borderRadius: 8,
            }}
          >
            <Box sx={{ width: 80 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 0.5,
                  color: "error.light",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "error.light",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Days
              </Typography>
            </Box>

            <Box sx={{ width: 80 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 0.5,
                  color: "error.light",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "error.light",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Hours
              </Typography>
            </Box>

            <Box sx={{ width: 80 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 0.5,
                  color: "error.light",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "error.light",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Minutes
              </Typography>
            </Box>

            <Box sx={{ width: 80 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 0.5,
                  color: "error.light",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "error.light",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Seconds
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Grid container spacing={2}>
          {products.slice(0, 8).map((item) => (
            <Grid
              key={item.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{ mx: "auto", maxWidth: { xs: 320, sm: 1 } }}
            >
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default HotDeals;
