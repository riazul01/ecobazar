import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useBreakpoints } from "providers/BreakpointProvider";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import ProductCard from "components/common/ProductCard";
import FilterIcon from "components/icons/FilterIcon";
import SortBySelect from "components/common/SortBySelect";
import Iconify from "components/base/Iconify";
import { products } from "data/products";
import { searchProducts } from "utils/productSearch";

interface ProductsProps {
  toggleDrawer: () => void;
}

const ITEMS_PER_PAGE = 12;

const Products = ({ toggleDrawer }: ProductsProps) => {
  const { downLg } = useBreakpoints();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;
  const rating = searchParams.get("rating")
    ? Number(searchParams.get("rating"))
    : undefined;
  const tag = searchParams.get("tag") || "";
  const sortBy = searchParams.get("sort") || "Latest";
  const page = Number(searchParams.get("page") || "1");

  const hasActiveFilters = Boolean(
    query ||
    category ||
    minPrice !== undefined ||
    maxPrice !== undefined ||
    rating ||
    tag,
  );

  const filteredProducts = useMemo(() => {
    return searchProducts(products, {
      query,
      category,
      minPrice,
      maxPrice,
      rating,
      tag,
      sortBy,
    });
  }, [query, category, minPrice, maxPrice, rating, tag, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const validPage = Math.min(Math.max(1, page), totalPages);
  const displayedProducts = filteredProducts.slice(
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

  const removeFilter = (key: string, subKey?: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    if (subKey) newParams.delete(subKey);
    newParams.delete("page");
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <Box sx={{ flex: 1 }}>
      {/* Top Bar: Sort, Filter Button, and Results Count */}
      <Stack
        sx={{
          mb: 2.5,
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
          <SortBySelect />
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
            {filteredProducts.length}
          </Typography>{" "}
          results found
        </Typography>
      </Stack>

      {/* Active Filters Badges */}
      {hasActiveFilters && (
        <Stack
          sx={{
            mb: 3,
            gap: 1,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", mr: 0.5 }}
          >
            Active filters:
          </Typography>

          {query && (
            <Chip
              label={`Search: "${query}"`}
              size="small"
              onDelete={() => removeFilter("search")}
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.dark",
                borderRadius: 5,
                border: 1,
                borderColor: alpha(theme.palette.primary.main, 0.25),
                fontSize: "0.8rem",
                "& .MuiChip-label": {
                  color: "primary.dark",
                  px: 1,
                },
                "& .MuiChip-deleteIcon": {
                  color: "primary.main",
                  "&:hover": {
                    color: "error.main",
                  },
                },
              })}
            />
          )}

          {category && (
            <Chip
              label={`Category: ${category}`}
              size="small"
              onDelete={() => removeFilter("category")}
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.dark",
                borderRadius: 5,
                border: 1,
                borderColor: alpha(theme.palette.primary.main, 0.25),
                fontSize: "0.8rem",
                "& .MuiChip-label": {
                  color: "primary.dark",
                  px: 1,
                },
                "& .MuiChip-deleteIcon": {
                  color: "primary.main",
                  "&:hover": {
                    color: "error.main",
                  },
                },
              })}
            />
          )}

          {(minPrice !== undefined || maxPrice !== undefined) && (
            <Chip
              label={`Price: $${minPrice ?? 0} - $${maxPrice ?? 100}`}
              size="small"
              onDelete={() => removeFilter("minPrice", "maxPrice")}
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.dark",
                borderRadius: 5,
                border: 1,
                borderColor: alpha(theme.palette.primary.main, 0.25),
                fontSize: "0.8rem",
                "& .MuiChip-label": {
                  color: "primary.dark",
                  px: 1,
                },
                "& .MuiChip-deleteIcon": {
                  color: "primary.main",
                  "&:hover": {
                    color: "error.main",
                  },
                },
              })}
            />
          )}

          {rating && (
            <Chip
              label={`Rating: ${rating}★+`}
              size="small"
              onDelete={() => removeFilter("rating")}
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.dark",
                borderRadius: 5,
                border: 1,
                borderColor: alpha(theme.palette.primary.main, 0.25),
                fontSize: "0.8rem",
                "& .MuiChip-label": {
                  color: "primary.dark",
                  px: 1,
                },
                "& .MuiChip-deleteIcon": {
                  color: "primary.main",
                  "&:hover": {
                    color: "error.main",
                  },
                },
              })}
            />
          )}

          {tag && (
            <Chip
              label={`Tag: #${tag}`}
              size="small"
              onDelete={() => removeFilter("tag")}
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.dark",
                borderRadius: 5,
                border: 1,
                borderColor: alpha(theme.palette.primary.main, 0.25),
                fontSize: "0.8rem",
                "& .MuiChip-label": {
                  color: "primary.dark",
                  px: 1,
                },
                "& .MuiChip-deleteIcon": {
                  color: "primary.main",
                  "&:hover": {
                    color: "error.main",
                  },
                },
              })}
            />
          )}

          <Button
            size="small"
            variant="text"
            onClick={clearAllFilters}
            sx={{ color: "error.main", fontSize: "0.75rem", p: 0.5 }}
          >
            Clear all
          </Button>
        </Stack>
      )}

      {/* Products Grid or Empty State */}
      {displayedProducts.length > 0 ? (
        <>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {displayedProducts.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard data={item} />
              </Grid>
            ))}
          </Grid>
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={validPage}
              onChange={handlePageChange}
              color="primary"
              size="medium"
              sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "center" }}
            />
          )}
        </>
      ) : (
        <Box sx={{ py: 8, textAlign: "center", width: 1 }}>
          <Iconify
            icon="solar:magnifer-linear"
            sx={{ fontSize: 52, color: "text.disabled", mb: 1.5 }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
          >
            No products found
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 440, mx: "auto", mb: 3 }}
          >
            We couldn&apos;t find any products matching your search criteria.
            Try modifying your search term or clearing active filters.
          </Typography>
          <Button variant="contained" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Products;
