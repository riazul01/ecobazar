import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import MarqueeModule from "react-fast-marquee";
import SectionWrapper from "../SectionWrapper";
import { brands } from "data/brands";

type MarqueeType = typeof MarqueeModule;

const Marquee =
  (MarqueeModule as unknown as { default?: MarqueeType }).default ??
  MarqueeModule;

const Brands = () => {
  return (
    <SectionWrapper sx={{ py: 7.5 }}>
      <Marquee speed={40} pauseOnHover gradient>
        {brands.map((item) => (
          <Stack
            key={item.id}
            component={Link}
            href={item.link}
            sx={{ width: 220 }}
          >
            <item.logo
              sx={(theme) => ({
                height: 32,
                width: "auto",
                color: "grey.300",
                transition: theme.transitions.create(
                  ["color", "background-color", "transform"],
                  {
                    duration: 300,
                    easing: theme.transitions.easing.easeInOut,
                  },
                ),
                "&:hover": { color: "success.main" },
              })}
            />
          </Stack>
        ))}
      </Marquee>
    </SectionWrapper>
  );
};

export default Brands;
