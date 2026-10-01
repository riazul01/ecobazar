import { navLinks } from "data/nav-links";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Iconify from "components/base/Iconify";
import Logo from "components/common/Logo";

interface SidebarProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

const Sidebar = ({ drawerOpen, toggleDrawer }: SidebarProps) => {
  return (
    <Drawer
      variant="temporary"
      open={drawerOpen}
      onClose={toggleDrawer}
      slotProps={{
        paper: {
          sx: {
            px: 2,
          },
        },
      }}
      sx={{
        width: 260,
        display: { xs: "block", lg: "none" },
        [`& .${drawerClasses.paper}`]: { width: 260 },
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          // py: 2,
          mb: 3,
        }}
      >
        <Logo sx={{ justifyContent: "flex-start" }} />
        <IconButton
          size="small"
          onClick={toggleDrawer}
          aria-label="Close sidebar"
        >
          <Iconify
            icon="mdi:close"
            sx={{ color: "text.primary", pointerEvents: "none" }}
          />
        </IconButton>
      </Stack>
      <List component="nav" sx={{ p: 0 }}>
        {navLinks.map((item) => (
          <ListItemButton
            key={item.id}
            component={Link}
            href={item.path}
            sx={{ mb: 0.5, bgcolor: item.active ? "grey.100" : null }}
          >
            <ListItemIcon>
              {item.icon && (
                <Iconify
                  icon={item.icon}
                  sx={{
                    color: item.active ? "primary.main" : "text.secondary",
                    fontSize: "h4.fontSize",
                  }}
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{
                [`& .${listItemTextClasses.primary}`]: {
                  fontWeight: 500,
                  color: item.active ? "primary.main" : "text.secondary",
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
