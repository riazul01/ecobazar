import { Paper, SxProps } from '@mui/material';

interface BannarProps {
  sx?: SxProps;
  bgImage: string;
  children: React.ReactNode;
}

const Bannar = ({ sx, bgImage, children }: BannarProps) => {
  return (
    <Paper
      sx={{
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default Bannar;
