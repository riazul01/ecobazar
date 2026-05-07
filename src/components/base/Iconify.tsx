import { Box, type BoxProps } from "@mui/material";
import { Icon, type IconProps } from "@iconify/react";

interface IconifyProps extends BoxProps {
  icon: IconProps["icon"];
}

const Iconify = ({ icon, ...rest }: IconifyProps) => {
  return <Box component={Icon} icon={icon} {...rest} />;
};

export default Iconify;
