import type { SxProps } from "@mui/material";
import Link from "@mui/material/Link";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Image from "components/base/Image";
import EcoLogo from "assets/logo.png";

interface LogoProps {
  bgType?: "light" | "dark";
  sx?: SxProps;
}

const Logo = ({ bgType = "light", sx }: LogoProps) => {
  return (
    <ButtonBase component={Link} href="/" disableRipple sx={sx}>
      <Image
        src={EcoLogo}
        sx={{ height: { xs: 24, md: 32 }, width: { xs: 24, md: 32 } }}
      />
      <Typography
        variant="h4"
        sx={{
          ml: 1.25,
          color: bgType === "dark" ? "common.white" : "text.primary",
          fontSize: { md: "h3.fontSize" },
          fontWeight: 500,
        }}
      >
        Ecobazar
      </Typography>
    </ButtonBase>
  );
};

export default Logo;
