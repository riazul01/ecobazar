import type { PaperProps, SxProps } from "@mui/material";
import Paper from "@mui/material/Paper";

interface BannerProps extends PaperProps {
  sx?: SxProps;
  bgImage: string;
  children: React.ReactNode;
}

const Banner = ({ sx, bgImage, children, ...rest }: BannerProps) => {
  return (
    <Paper
      sx={{
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};

export default Banner;
