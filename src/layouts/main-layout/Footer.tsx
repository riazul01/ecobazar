import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "components/base/Image";
import Logo from "components/common/Logo";
import SectionWrapper from "components/sections/SectionWrapper";
import { paymentMethods } from "data/payment-methods";
import { footerLinks } from "data/footer-links";

const Footer = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "grey.950", overflow: "hidden" }}>
      <SectionWrapper sx={{ flexDirection: "column" }}>
        <Grid
          container
          spacing={3}
          sx={{ py: 4, borderBottom: 1, borderColor: "grey.900" }}
        >
          <Grid size={{ xs: 12, lg: 4 }} sx={{ mb: { xs: 2, lg: 0 } }}>
            <Logo bgType="dark" />

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "text.disabled",
                maxWidth: { xs: 670, lg: 380 },
              }}
            >
              Welcome to Ecomart — Find quality groceries, fresh produce, and
              pantry staples with fast delivery and excellent service. Shop with
              ease today!
            </Typography>

            <Stack sx={{ mt: 3, gap: 1, flexShrink: 0 }}>
              <Typography
                variant="subtitle2"
                component={Link}
                href="tel:+8801234567890"
                sx={{
                  color: "common.white",
                  borderBottom: 1.5,
                  borderColor: "primary.main",
                }}
              >
                (219) 555-0114
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
                or
              </Typography>
              <Typography
                variant="subtitle2"
                component={Link}
                href="mailto:ecomart@mail.com"
                sx={{
                  color: "common.white",
                  borderBottom: 1.5,
                  borderColor: "primary.main",
                }}
              >
                ecobazar@mail.com
              </Typography>
            </Stack>
          </Grid>

          {footerLinks.map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Box key={item.id} sx={{ flex: 1, minWidth: 190 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, color: "common.white" }}
                >
                  {item.subheader}
                </Typography>
                {item.links.map((item) => (
                  <Typography
                    key={item.id}
                    variant="body2"
                    component={Link}
                    href={item.link}
                    sx={{
                      mb: 1.5,
                      display: "block",
                      color: "text.disabled",
                      transition: "all 0.3s ease",
                      "&:hover": { color: "success.main" },
                    }}
                  >
                    {item.title}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack
          sx={{
            py: 2,
            gap: 1.5,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            Ecobazar &copy; {new Date().getFullYear()} — All Rights Reserved.
          </Typography>

          <Stack sx={{ gap: 1, alignItems: "center" }}>
            {paymentMethods.map((item) => (
              <Stack
                key={item.id}
                component={Link}
                href={item.link}
                sx={{ alignItems: "center" }}
              >
                <Image src={item.image} sx={{ height: 30 }} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </SectionWrapper>
    </Box>
  );
};

export default Footer;
