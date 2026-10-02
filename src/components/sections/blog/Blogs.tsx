import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useBreakpoints } from "providers/BreakpointProvider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import FilterIcon from "components/icons/FilterIcon";
import SortBySelect from "components/common/SortBySelect";
import BlogCard from "components/common/BlogCard";
import Iconify from "components/base/Iconify";
import { blogs, type Blog } from "data/blogs";

import { alpha, type Theme } from "@mui/material";

interface ProductItemsProps {
  toggleDrawer: () => void;
}

const ITEMS_PER_PAGE = 6;

const blogSortOptions = [
  { label: "Latest", value: "Latest" },
  { label: "Oldest", value: "Oldest" },
  { label: "Popular", value: "Popular" },
  { label: "A-Z", value: "A-Z" },
];

const activeChipSx = (theme: Theme) => ({
  bgcolor: alpha(theme.palette.primary.main, 0.08),
  color: "primary.dark",
  fontWeight: 500,
  fontSize: "0.8125rem",
  borderRadius: 8,
  border: 1,
  borderColor: alpha(theme.palette.primary.main, 0.25),
  height: 28,
  "& .MuiChip-label": {
    px: 1,
    color: "primary.dark",
    fontWeight: 500,
  },
  "& .MuiChip-deleteIcon": {
    color: "primary.main",
    fontSize: 16,
    "&:hover": {
      color: "error.main",
    },
  },
});

const Blogs = ({ toggleDrawer }: ProductItemsProps) => {
  const { downLg } = useBreakpoints();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedTag = searchParams.get("tag") || "";
  const sortBy = searchParams.get("sort") || "Latest";
  const page = Number(searchParams.get("page")) || 1;

  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    // Filter by search term
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          (b.desc && b.desc.toLowerCase().includes(q)) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    // Filter by category
    if (selectedCategory.trim()) {
      const cat = selectedCategory.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.category.toLowerCase() === cat ||
          b.tags.some((t) => t.toLowerCase() === cat),
      );
    }

    // Filter by tag
    if (selectedTag.trim()) {
      const tag = selectedTag.toLowerCase().trim();
      result = result.filter((b) =>
        b.tags.some((t) => t.toLowerCase() === tag),
      );
    }

    // Sort items
    if (sortBy === "Popular") {
      result.sort((a, b) => b.comments - a.comments);
    } else if (sortBy === "Oldest") {
      result.sort((a, b) => Number(a.id) - Number(b.id));
    } else if (sortBy === "A-Z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: Latest
      result.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;
  const validPage = Math.min(Math.max(1, page), totalPages);
  const displayedBlogs = filteredBlogs.slice(
    (validPage - 1) * ITEMS_PER_PAGE,
    validPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    const newParams = new URLSearchParams(searchParams);
    if (newPage === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", String(newPage));
    }
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const removeFilter = (key: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    newParams.delete("page");
    setSearchParams(newParams);
  };

  const hasActiveFilters = Boolean(
    searchQuery || selectedCategory || selectedTag,
  );

  return (
    <Box sx={{ width: 1 }}>
      {/* Top Bar: Filter Toggle, Sort Select, and Results Count */}
      <Stack
        sx={{
          mb: hasActiveFilters ? 2 : 3,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: 2,
        }}
      >
        {downLg && (
          <Button
            variant="contained"
            size="medium"
            endIcon={<FilterIcon />}
            onClick={toggleDrawer}
          >
            Filter
          </Button>
        )}
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1, color: "text.secondary" }}>
            Sort by:
          </Typography>
          <SortBySelect
            options={blogSortOptions}
            ariaLabel="Sort blog articles"
          />
        </Stack>
        <Typography
          variant="body1"
          sx={{
            ml: "auto",
            color: "text.secondary",
            textAlign: "right",
            width: { xs: 1, sm: "auto" },
          }}
        >
          <Typography
            component="span"
            sx={{ color: "text.primary", fontWeight: 600 }}
          >
            {filteredBlogs.length}
          </Typography>{" "}
          results found
        </Typography>
      </Stack>

      {/* Active Filter Chips (Appearing BELOW Sort By & Results Count) */}
      {hasActiveFilters && (
        <Stack
          sx={{
            mb: 3,
            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary", mr: 0.5 }}>
            Active filters:
          </Typography>
          {searchQuery && (
            <Chip
              label={`Search: "${searchQuery}"`}
              size="small"
              onDelete={() => removeFilter("search")}
              sx={activeChipSx}
            />
          )}
          {selectedCategory && (
            <Chip
              label={`Category: ${selectedCategory}`}
              size="small"
              onDelete={() => removeFilter("category")}
              sx={activeChipSx}
            />
          )}
          {selectedTag && (
            <Chip
              label={`Tag: #${selectedTag}`}
              size="small"
              onDelete={() => removeFilter("tag")}
              sx={activeChipSx}
            />
          )}
          <Button
            size="small"
            variant="text"
            color="error"
            onClick={handleClearFilters}
            sx={{
              fontSize: "0.75rem",
              p: 0.5,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Clear all
          </Button>
        </Stack>
      )}

      {/* Blog Cards Grid */}
      {displayedBlogs.length > 0 ? (
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {displayedBlogs.map((item: Blog) => (
            <Grid
              key={item.id}
              size={{ xs: 12, md: 6 }}
              sx={{ placeItems: "center" }}
            >
              <BlogCard key={item.id} data={item} />
            </Grid>
          ))}
          {totalPages > 1 && (
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={totalPages}
                page={validPage}
                onChange={handlePageChange}
                color="primary"
                size="medium"
                sx={{ mt: 2 }}
              />
            </Grid>
          )}
        </Grid>
      ) : (
        /* Empty State */
        <Box
          sx={{
            py: 8,
            px: 3,
            textAlign: "center",
            bgcolor: "grey.50",
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            mb: 4,
          }}
        >
          <Iconify
            icon="solar:document-text-linear"
            sx={{ fontSize: 48, color: "text.disabled", mb: 1.5 }}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            No Articles Found
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 2.5, maxWidth: 400, mx: "auto" }}
          >
            We couldn't find any articles matching your search or filter
            criteria. Try using different keywords or resetting filters.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClearFilters}
          >
            Reset Filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Blogs;
