import { useBreakpoints } from "providers/BreakpointProvider";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { inputBaseClasses } from "@mui/material";
import { socialLinks } from "data/social-links";

const Newsletter = () => {
  const { isMd, isXs } = useBreakpoints();

  return (
    <Stack sx={{ bgcolor: "grey.100" }}>
      <SectionWrapper
        component={Stack}
        sx={{
          py: 3.5,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Typography
            variant="h5"
            sx={{ mb: 0.75, textAlign: { xs: "center", md: "left" } }}
          >
            Subcribe our Newsletter
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey.600",
              textAlign: { xs: "center", md: "left" },
              maxWidth: 460,
            }}
          >
            Subscribe to our newsletter for the latest news, exclusive offers
            and expert insights delivered right to your inbox
          </Typography>
        </Box>

        <Stack
          sx={{
            width: 1,
            maxWidth: 460,
            height: { xs: 42, md: 46 },
            alignItems: "center",
            justifyContent: "center",
            ml: { xs: 0, md: "auto" },
          }}
        >
          <TextField
            id="newsletter"
            variant="filled"
            placeholder="Your email address"
            sx={{
              width: 1,
              height: 1,
              [`& .${inputBaseClasses.root}`]: {
                pr: 5,
                pl: 2.5,
                height: 1,
                borderRadius: 8,
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              ml: -5,
              height: 1,
              width: isMd || isXs ? 80 : 160,
              borderRadius: 10,
            }}
          >
            {isMd || isXs ? (
              <Iconify
                icon="material-symbols-light:drag-click-rounded"
                sx={{ fontSize: 28 }}
              />
            ) : (
              "Subscribe"
            )}
          </Button>
        </Stack>

        <Stack sx={{ gap: 1, alignItems: "center" }}>
          {socialLinks.map((item) => (
            <IconButton
              key={item.id}
              size="large"
              component={Link}
              href={item.link}
            >
              <Iconify icon={item.icon} color="grey.500" />
            </IconButton>
          ))}
        </Stack>
      </SectionWrapper>
    </Stack>
  );
};

export default Newsletter;
