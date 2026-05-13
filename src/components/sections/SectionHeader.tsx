import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";

interface SectionHeaderProps {
  title: string;
  path: string;
  linkText: string;
}

const SectionHeader = ({ title, path, linkText }: SectionHeaderProps) => {
  return (
    <Stack
      sx={{
        mb: 2.25,
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" } }}
      >
        {title}
      </Typography>
      <Button
        component={Link}
        href={path}
        variant="text"
        endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
        sx={{ mr: -2.5 }}
        disableRipple
      >
        {linkText}
      </Button>
    </Stack>
  );
};

export default SectionHeader;
