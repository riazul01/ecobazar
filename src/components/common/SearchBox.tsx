import { useState, useRef, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useBreakpoints } from "providers/BreakpointProvider";
import { alpha, inputBaseClasses } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import Iconify from "components/base/Iconify";
import { paths } from "routes/paths";
import { getSearchSuggestions } from "utils/productSearch";

interface SearchBoxProps {
  showSearchButton?: boolean;
  onSearchSubmit?: () => void;
}

const SearchBox = ({ showSearchButton, onSearchSubmit }: SearchBoxProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [query, setQuery] = useState(initialSearch);
  const [prevInitialSearch, setPrevInitialSearch] = useState(initialSearch);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { downLg } = useBreakpoints();
  const open = Boolean(anchorEl);

  if (initialSearch !== prevInitialSearch) {
    setPrevInitialSearch(initialSearch);
    setQuery(initialSearch);
  }

  const suggestions = useMemo(() => {
    return getSearchSuggestions(query, 5);
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setQuery(val);
    if (val.trim()) {
      setAnchorEl(containerRef.current);
    } else {
      setAnchorEl(null);
    }
  };

  const handleFocus = () => {
    if (query.trim()) {
      setAnchorEl(containerRef.current);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const executeSearch = (searchQuery: string) => {
    const term = searchQuery.trim();
    if (!term) return;
    handleClose();
    navigate(`${paths.shop}?search=${encodeURIComponent(term)}`);
    onSearchSubmit?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      executeSearch(query);
    } else if (event.key === "Escape") {
      handleClose();
    }
  };

  const handleSelectProduct = (productId: string | number) => {
    handleClose();
    navigate(paths.productDetails(productId));
    onSearchSubmit?.();
  };

  const handleSelectCategory = (cat: string) => {
    handleClose();
    const formatted = cat.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
    navigate(`${paths.shop}?category=${encodeURIComponent(formatted)}`);
    onSearchSubmit?.();
  };

  const handleSelectTag = (tag: string) => {
    handleClose();
    navigate(`${paths.shop}?tag=${encodeURIComponent(tag.toLowerCase())}`);
    onSearchSubmit?.();
  };

  const handleClear = () => {
    setQuery("");
    handleClose();
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
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
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
                endAdornment: query ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={handleClear}
                      aria-label="Clear search"
                      sx={{ p: 0.5, mr: 0.5 }}
                    >
                      <Iconify icon="mdi:close" sx={{ fontSize: 16 }} />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
            }}
          />
          {showSearchButton && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => executeSearch(query)}
              sx={{
                height: 1,
                borderRadius: 1.5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                minWidth: { xs: 48, lg: 96 },
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
          open={open && Boolean(query.trim())}
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
                p: 1.5,
                mt: 1,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
                width: anchorEl ? Math.max(anchorEl.clientWidth, 340) : 340,
                maxWidth: "95vw",
                maxHeight: 460,
                overflowY: "auto",
              },
            },
          }}
        >
          {suggestions.products.length > 0 ? (
            <Box>
              {/* Categories & Tags Suggestions */}
              {(suggestions.categories.length > 0 || suggestions.tags.length > 0) && (
                <Box sx={{ mb: 1.5 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.75 }}
                  >
                    Quick Filter:
                  </Typography>
                  <Stack sx={{ gap: 0.75, flexWrap: "wrap" }}>
                    {suggestions.categories.map((cat) => (
                      <Chip
                        key={cat}
                        label={`Category: ${cat}`}
                        size="small"
                        onClick={() => handleSelectCategory(cat)}
                        sx={(theme) => ({
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "common.white",
                          },
                        })}
                      />
                    ))}
                    {suggestions.tags.map((t) => (
                      <Chip
                        key={t}
                        label={`#${t}`}
                        size="small"
                        onClick={() => handleSelectTag(t)}
                        sx={{
                          fontSize: "0.75rem",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </Stack>
                  <Divider sx={{ my: 1.25 }} />
                </Box>
              )}

              {/* Products List */}
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
              >
                Products ({suggestions.totalMatches})
              </Typography>

              <List dense sx={{ p: 0 }}>
                {suggestions.products.map((item) => {
                  const originalPrice =
                    item.discountInPercent > 0
                      ? (item.price / (1 - item.discountInPercent / 100)).toFixed(2)
                      : null;

                  return (
                    <ListItemButton
                      key={item.id}
                      onClick={() => handleSelectProduct(item.id)}
                      sx={{
                        borderRadius: 1.5,
                        px: 1,
                        py: 0.5,
                        gap: 1.25,
                        transition: "all 0.15s ease",
                        "&:hover": {
                          bgcolor: "grey.100",
                        },
                      }}
                    >
                      <ListItemAvatar sx={{ minWidth: 44 }}>
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          variant="rounded"
                          sx={{ width: 44, height: 44, borderRadius: 1.25 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.primary",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.name}
                          </Typography>
                        }
                        secondary={
                          <Stack sx={{ alignItems: "center", gap: 1, mt: 0.25 }}>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "primary.main" }}
                            >
                              ${item.price.toFixed(2)}
                            </Typography>
                            {originalPrice && (
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "text.disabled",
                                  textDecoration: "line-through",
                                }}
                              >
                                ${originalPrice}
                              </Typography>
                            )}
                          </Stack>
                        }
                      />
                      {item.discountInPercent > 0 && (
                        <Chip
                          label={`-${item.discountInPercent}%`}
                          size="small"
                          color="error"
                          sx={{
                            height: 20,
                            fontSize: "0.7rem",
                            "& .MuiChip-label": { px: 0.75 },
                          }}
                        />
                      )}
                    </ListItemButton>
                  );
                })}
              </List>

              <Divider sx={{ my: 1 }} />

              {/* View all button */}
              <Button
                fullWidth
                variant="text"
                size="small"
                onClick={() => executeSearch(query)}
                endIcon={<Iconify icon="solar:arrow-right-linear" sx={{ fontSize: 16 }} />}
                sx={{
                  color: "primary.main",
                  justifyContent: "space-between",
                  px: 1.5,
                  py: 0.75,
                }}
              >
                View all {suggestions.totalMatches} results
              </Button>
            </Box>
          ) : (
            <Box sx={{ py: 3, px: 2, textAlign: "center" }}>
              <Iconify
                icon="solar:magnifer-linear"
                sx={{ fontSize: 36, color: "text.disabled", mb: 1 }}
              />
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                No products found
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.5, display: "block" }}>
                We couldn&apos;t find anything matching &quot;{query}&quot;.
              </Typography>
            </Box>
          )}
        </Popover>
      </Stack>
    </ClickAwayListener>
  );
};

export default SearchBox;
