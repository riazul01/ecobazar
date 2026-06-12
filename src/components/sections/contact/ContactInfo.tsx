import { Stack, Typography } from "@mui/material";
import EnvelopeAltIcon from "components/icons/EnvelopeAltIcon";
import LocationAltIcon from "components/icons/LocationAltIcon";
import PhoneCallAltIcon from "components/icons/PhoneCallAltIcon";
import customShadows from "theme/shadows";

const ContactInfo = () => {
  return (
    <Stack
      direction="column"
      sx={{
        px: 2.5,
        width: { xs: 1, md: 312 },
        borderRadius: 2,
        boxShadow: customShadows[0],
      }}
    >
      <Stack
        direction="column"
        sx={(theme) => ({
          py: 3,
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          borderBottom: `1px solid ${theme.palette.divider}`,
        })}
      >
        <LocationAltIcon sx={{ color: "success.dark", fontSize: 52 }} />
        <Typography sx={{ textAlign: "center" }}>
          2715 Ash Dr. San Jose, South Dakota 83475
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={(theme) => ({
          py: 3,
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          borderBottom: `1px solid ${theme.palette.divider}`,
        })}
      >
        <EnvelopeAltIcon sx={{ color: "success.dark", fontSize: 52 }} />
        <Typography sx={{ textAlign: "center" }}>
          Proxy@gmail.com <br /> Help.proxy@gmail.com
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          py: 3,
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhoneCallAltIcon sx={{ color: "success.dark", fontSize: 52 }} />
        <Typography sx={{ textAlign: "center" }}>
          (219) 555-0114 <br /> (164) 333-0487
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContactInfo;
