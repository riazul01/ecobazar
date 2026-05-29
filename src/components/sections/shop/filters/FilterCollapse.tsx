import { useState, type ReactNode } from "react";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Iconify from "components/base/Iconify";

interface FilterCollapseProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const FilterCollapse = ({
  title,
  children,
  defaultOpen = false,
}: FilterCollapseProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        disableRipple
        sx={{
          p: 0,
          mb: 1.5,
          backgroundColor: "transparent !important",
        }}
      >
        <ListItemText
          primary={title}
          sx={{
            "& .MuiListItemText-primary": {
              color: "text.primary",
              fontSize: "h6.fontSize",
              fontWeight: 500,
            },
          }}
        />

        <Iconify
          icon="fa7-solid:chevron-down"
          sx={(theme) => ({
            fontSize: 20,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest,
              easing: theme.transitions.easing.easeInOut,
            }),
          })}
        />
      </ListItemButton>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ p: 0, mb: open ? 3 : 0 }}
      >
        {children}
      </Collapse>
    </>
  );
};

export default FilterCollapse;
