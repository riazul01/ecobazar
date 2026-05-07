import type { BoxProps, SxProps } from "@mui/material";
import Box from "@mui/material/Box";

interface SectionWrapperProps extends BoxProps {
  sx?: SxProps;
  children: React.ReactNode;
}

const SectionWrapper = ({ children, sx, ...rest }: SectionWrapperProps) => {
  return (
    <Box sx={{ px: 2, width: 1, maxWidth: 1336, mx: "auto", ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default SectionWrapper;
