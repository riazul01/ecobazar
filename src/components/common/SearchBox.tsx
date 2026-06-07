import { useState, useRef, useMemo } from "react";
import { useBreakpoints } from "providers/BreakpointProvider";
import { inputBaseClasses } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Iconify from "components/base/Iconify";

interface SearchBoxProps {
  showSearchButton?: boolean;
}

const SearchBox = ({ showSearchButton }: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { downLg } = useBreakpoints();
  const open = Boolean(anchorEl);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return [
      `${query} tutorial`,
      `${query} examples`,
      `${query} documentation`,
      `${query} tips`,
    ];
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setAnchorEl(containerRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Stack sx={{ flex: 1, justifyContent: "center" }}>
        <Stack
          ref={containerRef}
          sx={{
            width: 1,
            height: { xs: 40, md: 46 },
            maxWidth: showSearchButton ? { xs: 398, lg: 498 } : "unset",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <TextField
            id="product-search"
            variant="filled"
            placeholder="Search products..."
            value={query}
            onChange={handleChange}
            sx={[
              {
                flex: 1,
                height: 1,
                [`& .${inputBaseClasses.root}`]: {
                  height: 1,
                },
              },
              showSearchButton
                ? {
                    [`& .${inputBaseClasses.root}`]: {
                      borderRight: "none",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }
                : {},
            ]}
            slotProps={{
              input: {
                sx: {
                  fontSize: { xs: "body2.fontSize", md: "body1.fontSize" },
                },
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: { xs: "none", lg: "flex" } }}
                  >
                    <Iconify icon="prime:search" />
                  </InputAdornment>
                ),
              },
            }}
          />
          {showSearchButton && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert(`Searching for: ${query}`)}
              sx={{
                height: 1,
                borderRadius: 1.5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              {downLg ? (
                <Iconify icon="prime:search" sx={{ fontSize: 24 }} />
              ) : (
                "Search"
              )}
            </Button>
          )}
        </Stack>

        <Popover
          open={open && results.length > 0}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          disableAutoFocus
          disableEnforceFocus
          slotProps={{
            paper: {
              sx: {
                p: 1,
                mt: 1,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                width: anchorEl?.clientWidth,
              },
            },
          }}
        >
          <List dense sx={{ p: 0 }}>
            {results.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  setQuery(item);
                  handleClose();
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Stack>
    </ClickAwayListener>
  );
};

export default SearchBox;
