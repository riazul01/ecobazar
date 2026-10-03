import { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconifyIcon from "components/base/Iconify";
import { listClasses } from "@mui/material";

interface Action {
  id: number;
  icon: string;
  title: string;
}

const actions: Action[] = [
  {
    id: 1,
    icon: "hugeicons:file-sync",
    title: "Sync",
  },
  {
    id: 2,
    icon: "hugeicons:pencil-edit-02",
    title: "Edit",
  },
  {
    id: 3,
    icon: "hugeicons:delete-02",
    title: "Remove",
  },
];

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleActionButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleActionMenuClose = () => {
    setAnchorEl(null);
  };

  const handleActionItemClick = () => {
    handleActionMenuClose();
  };

  return (
    <Box>
      <IconButton
        onClick={handleActionButtonClick}
        sx={{ border: "none", bgcolor: "transparent !important" }}
      >
        <IconifyIcon
          icon="iconamoon:menu-kebab-horizontal-fill"
          sx={{ color: "text.primary" }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleActionMenuClose}
        onClick={handleActionMenuClose}
        sx={{
          mt: 0.5,
          [`& .${listClasses.root}`]: {
            width: 140,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {actions.map((actionItem) => {
          const isError = actionItem.id === 3;
          return (
            <MenuItem
              key={actionItem.id}
              onClick={handleActionItemClick}
              sx={{
                color: isError ? "error.main" : "text.primary",
              }}
            >
              <ListItemIcon
                sx={{
                  mr: 1,
                  fontSize: "h5.fontSize",
                  color: isError ? "error.main" : "inherit",
                }}
              >
                <IconifyIcon
                  icon={actionItem.icon}
                  sx={{ color: isError ? "error.main" : "inherit" }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  sx={{
                    color: isError ? "error.main" : "text.primary",
                    fontSize: "body2.fontSize",
                  }}
                >
                  {actionItem.title}
                </Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default ActionMenu;
