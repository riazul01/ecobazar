import type { SxProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import breadcrumbBg from "assets/backgrounds/breadcrumb.webp";

export interface BreadcrumbItem {
  id: string | number;
  title?: string;
  icon?: string;
  link?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
  sx?: SxProps;
}

const Breadcrumb = ({ breadcrumbs, sx }: BreadcrumbProps) => {
  return (
    <Stack
      sx={{
        height: 120,
        borderTop: `1px solid #444`,
        backgroundImage: {
          xs: `linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${breadcrumbBg}')`,
          sm: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${breadcrumbBg}')`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        ...sx,
      }}
    >
      <SectionWrapper sx={{ height: 1, display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          separator={
            <Iconify
              icon="icon-park-outline:right"
              sx={{ color: "grey.600" }}
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs.map((item, index) =>
            item.active ? (
              <Typography sx={{ color: "primary.main", cursor: "default" }}>
                {item.title}
              </Typography>
            ) : (
              <Link
                key={index}
                href={item.active ? "#!" : item.link}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.disabled",
                }}
              >
                {item.icon ? (
                  <Iconify icon={item.icon} sx={{ fontSize: 28 }} />
                ) : (
                  item.title
                )}
              </Link>
            ),
          )}
        </Breadcrumbs>
      </SectionWrapper>
    </Stack>
  );
};

export default Breadcrumb;
