import { useState, useRef, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
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
import { getBlogSearchSuggestions } from "utils/blogSearch";

const BlogSearchBox = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [query, setQuery] = useState(initialSearch);
  const [prevInitialSearch, setPrevInitialSearch] = useState(initialSearch);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);

  if (initialSearch !== prevInitialSearch) {
    setPrevInitialSearch(initialSearch);
    setQuery(initialSearch);
  }

  const suggestions = useMemo(
    () => getBlogSearchSuggestions(query, 5),
    [query],
  );

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
    handleClose();
    const newParams = new URLSearchParams(searchParams);
    if (term) {
      newParams.set("search", term);
    } else {
      newParams.delete("search");
    }
    newParams.delete("page");
    const queryStr = newParams.toString();
    navigate(`${paths.blog}${queryStr ? `?${queryStr}` : ""}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      executeSearch(query);
    } else if (event.key === "Escape") {
      handleClose();
    }
  };

  const handleSelectBlog = (blogId: string | number) => {
    handleClose();
    navigate(paths.blogDetails(blogId));
  };

  const handleSelectCategory = (cat: string) => {
    handleClose();
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", cat.toLowerCase());
    newParams.delete("page");
    navigate(`${paths.blog}?${newParams.toString()}`);
  };

  const handleSelectTag = (tag: string) => {
    handleClose();
    const newParams = new URLSearchParams(searchParams);
    newParams.set("tag", tag.toLowerCase());
    newParams.delete("page");
    navigate(`${paths.blog}?${newParams.toString()}`);
  };

  const handleClear = () => {
    setQuery("");
    handleClose();
    if (searchParams.has("search")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("search");
      newParams.delete("page");
      const queryStr = newParams.toString();
      navigate(`${paths.blog}${queryStr ? `?${queryStr}` : ""}`);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Stack sx={{ width: 1, position: "relative" }}>
        <Stack
          ref={containerRef}
          sx={{
            width: 1,
            height: 46,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <TextField
            id="blog-search"
            variant="filled"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            sx={{
              flex: 1,
              width: 1,
              height: 1,
              [`& .${inputBaseClasses.root}`]: {
                height: 1,
              },
            }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "body2.fontSize",
                },
                startAdornment: (
                  <InputAdornment position="start">
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
          {suggestions.blogs.length > 0 ? (
            <Box>
              {/* Category & Tag Suggestions */}
              {(suggestions.categories.length > 0 ||
                suggestions.tags.length > 0) && (
                <Box sx={{ mb: 1.5 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 0.75 }}
                  >
                    Quick Filter:
                  </Typography>
                  <Stack
                    sx={{ gap: 0.75, flexWrap: "wrap", flexDirection: "row" }}
                  >
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

              {/* Articles List */}
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
              >
                Blog Articles ({suggestions.totalMatches})
              </Typography>

              <List dense sx={{ p: 0 }}>
                {suggestions.blogs.map((item) => (
                  <ListItemButton
                    key={item.id}
                    onClick={() => handleSelectBlog(item.id)}
                    sx={{
                      borderRadius: 1.5,
                      px: 1,
                      py: 0.75,
                      gap: 1.25,
                      transition: "all 0.15s ease",
                      "&:hover": {
                        bgcolor: "grey.100",
                      },
                    }}
                  >
                    <ListItemAvatar sx={{ minWidth: 48 }}>
                      <Avatar
                        src={item.image}
                        alt={item.title}
                        variant="rounded"
                        sx={{ width: 48, height: 48, borderRadius: 1.25 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontWeight: 500,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Stack
                          direction="row"
                          sx={{ alignItems: "center", gap: 1, mt: 0.25 }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ color: "primary.main", fontWeight: 500 }}
                          >
                            {item.category}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "text.disabled" }}
                          >
                            •
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            {item.publishDate}
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItemButton>
                ))}
              </List>

              <Divider sx={{ my: 1 }} />

              {/* View all results button */}
              <Button
                fullWidth
                variant="text"
                size="small"
                onClick={() => executeSearch(query)}
                endIcon={
                  <Iconify
                    icon="solar:arrow-right-linear"
                    sx={{ fontSize: 16 }}
                  />
                }
                sx={{
                  color: "primary.main",
                  justifyContent: "space-between",
                  px: 1.5,
                  py: 0.75,
                }}
              >
                View all {suggestions.totalMatches} articles
              </Button>
            </Box>
          ) : (
            <Box sx={{ py: 3, px: 2, textAlign: "center" }}>
              <Iconify
                icon="solar:magnifer-linear"
                sx={{ fontSize: 36, color: "text.disabled", mb: 1 }}
              />
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                No articles found
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mt: 0.5, display: "block" }}
              >
                We couldn&apos;t find any articles matching &quot;{query}&quot;.
              </Typography>
            </Box>
          )}
        </Popover>
      </Stack>
    </ClickAwayListener>
  );
};

export default BlogSearchBox;
