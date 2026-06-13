import type { ReactNode } from "react";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Iconify from "components/base/Iconify";

interface SidebarProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
  width?: object | number;
}

const FiltersDrawer = ({
  drawerOpen,
  toggleDrawer,
  children,
  width,
}: SidebarProps) => {
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
        width: width || 360,
        position: "relative",
        display: { xs: "block", lg: "none" },
        [`& .${drawerClasses.paper}`]: { width: width || 360 },
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

      {children}
    </Drawer>
  );
};

export default FiltersDrawer;
