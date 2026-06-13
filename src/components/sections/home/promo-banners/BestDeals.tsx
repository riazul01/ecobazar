import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner from "components/common/Banner";
import Iconify from "components/base/Iconify";
import { useCountdown } from "hooks/useCountdown";
import { VegetablesBg } from "data/images";

const BestDeals = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    30 * 24 * 60 * 60 * 1000,
  );

  return (
    <Banner
      bgImage={VegetablesBg}
      sx={{
        px: 3,
        py: 4,
        width: 1,
        maxWidth: 424,
        height: 536,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "white",
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Best Deals
      </Typography>
      <Typography
        variant="h2"
        sx={{ mt: 2, color: "white", textAlign: "center" }}
      >
        Sale of the Month
      </Typography>

      <Stack
        spacing={2}
        sx={{ mt: 2, alignItems: "flex-start", justifyContent: "center" }}
      >
        {[
          { id: 1, value: days, label: "Days" },
          { id: 2, value: hours, label: "Hours" },
          { id: 3, value: minutes, label: "Minutes" },
          { id: 4, value: seconds, label: "Seconds" },
        ].map((item, index) => (
          <React.Fragment key={item.id}>
            <div>
              <Typography
                variant="h3"
                sx={{ color: "white", textAlign: "center", fontWeight: 400 }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 0.5,
                  color: "grey.200",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Days
              </Typography>
            </div>
            {index !== 3 && (
              <Typography
                variant="h3"
                sx={{ mt: -0.25, color: "white", fontWeight: 300 }}
              >
                :
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Stack>

      <Stack sx={{ mt: 4, justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
          sx={{ width: 170 }}
        >
          Shop now
        </Button>
      </Stack>
    </Banner>
  );
};

export default BestDeals;
