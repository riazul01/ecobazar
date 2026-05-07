import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationIcon from "components/icons/LocationIcon";
import SectionWrapper from "components/sections/SectionWrapper";
import LanguageSelect from "./LanguageSelect";
import CurrencySelect from "./CurrencySelect";
import { paths } from "routes/paths";

const Topbar = () => {
  return (
    <Box sx={{ py: 1, borderBottom: 1, borderColor: "divider" }}>
      <SectionWrapper sx={{ gap: 0.5, display: "flex", alignItems: "center" }}>
        <Stack
          sx={{
            gap: 0.75,
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <LocationIcon sx={{ color: "text.secondary", fontSize: 18 }} />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </Typography>
        </Stack>

        <LanguageSelect sx={{ ml: { xs: 0, sm: "auto" } }} />
        <CurrencySelect />

        <Typography
          variant="body1"
          sx={{
            mx: 1,
            color: "divider",
            display: { xs: "none", sm: "flex" },
          }}
        >
          |
        </Typography>

        <Typography
          component={Link}
          href={paths.signIn}
          variant="caption"
          sx={{ ml: { xs: "auto", sm: 0.35 }, color: "text.secondary" }}
        >
          Sign In
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          /
        </Typography>
        <Typography
          component={Link}
          href={paths.signUp}
          variant="caption"
          sx={{ color: "text.secondary" }}
        >
          Sign Up
        </Typography>
      </SectionWrapper>
    </Box>
  );
};

export default Topbar;
