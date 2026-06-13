import { navLinks } from "data/nav-links";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
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
        position: "relative",
        display: { xs: "block", lg: "none" },
        [`& .${drawerClasses.paper}`]: { width: 260 },
      }}
    >
      <IconButton
        size="small"
        onClick={toggleDrawer}
        sx={{ position: "absolute", top: 12, right: 12 }}
      >
        <Iconify
          icon="mdi:close"
          sx={{ color: "text.primary", pointerEvents: "none" }}
        />
      </IconButton>
      <Logo sx={{ mb: 3, justifyContent: "flex-start" }} />
      <List component="nav" sx={{ p: 0 }}>
        {navLinks.map((item) => (
          <ListItemButton
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
