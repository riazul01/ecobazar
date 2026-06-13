import Drawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Iconify from "components/base/Iconify";
import Filters from "./filters";

interface SidebarProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

const FiltersDrawer = ({ drawerOpen, toggleDrawer }: SidebarProps) => {
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
        width: 360,
        position: "relative",
        display: { xs: "block", lg: "none" },
        [`& .${drawerClasses.paper}`]: { width: 360 },
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

      <Filters />
    </Drawer>
  );
};

export default FiltersDrawer;
