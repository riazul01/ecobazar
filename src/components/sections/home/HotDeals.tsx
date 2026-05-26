import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductCard from "components/common/ProductCard";
import SectionWrapper from "components/sections/SectionWrapper";
import { products } from "data/products";
import { useCountdown } from "hooks/useCountdown";

const HotDeals = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    7 * 24 * 60 * 60 * 1000,
  );

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
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map((item) => (
              <Box key={item.label} sx={{ width: 80 }}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 0.5,
                    color: "error.light",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "error.light",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
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
