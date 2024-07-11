import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

interface SectionHeaderProps {
  title: string;
  path: string;
  linkText: string;
}

const SectionHeader = ({ title, path, linkText }: SectionHeaderProps) => {
  return (
    <Stack mb={3} justifyContent="space-between" alignItems="center">
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      <Button
        component={Link}
        href={path}
        variant="text"
        endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
        sx={{ mr: -1 }}
      >
        {linkText}
      </Button>
    </Stack>
  );
};

export default SectionHeader;
