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
            px: { xs: 2.5, sm: 3 },
            pt: 6.5,
            pb: 4,
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
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          zIndex: 10,
          bgcolor: "grey.100",
          "&:hover": {
            bgcolor: "grey.200",
          },
        }}
      >
        <Iconify
          icon="mdi:close"
          sx={{ fontSize: 20, color: "text.primary" }}
        />
      </IconButton>

      {children}
    </Drawer>
  );
};

export default FiltersDrawer;
