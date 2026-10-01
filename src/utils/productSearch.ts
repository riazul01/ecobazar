import { products, type ProductData } from "data/products";

export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  tag?: string;
  tags?: string[];
  sortBy?: string;
  inStock?: boolean;
}

export interface AutocompleteResult {
  products: ProductData[];
  categories: string[];
  tags: string[];
  totalMatches: number;
}

/**
 * Advanced multi-attribute search and filtering across products.
 */
export function searchProducts(
  items: ProductData[] = products,
  filters: SearchFilters = {},
): ProductData[] {
  let results = [...items];

  const {
    query = "",
    category = "",
    minPrice,
    maxPrice,
    rating,
    tag,
    tags,
    sortBy = "Latest",
    inStock,
  } = filters;

  const trimmedQuery = query.trim().toLowerCase();

  // 1. Multi-attribute relevance scoring
  if (trimmedQuery) {
    const queryTokens = trimmedQuery.split(/\s+/).filter(Boolean);
    const scoredItems: { product: ProductData; score: number }[] = [];

    for (const item of results) {
      let score = 0;
      const name = item.name.toLowerCase();
      const desc = (item.desc || "").toLowerCase();
      const cat = (item.category || "").toLowerCase();
      const subCat = (item.subCategory || "").toLowerCase();
      const brand = (item.brandName || "").toLowerCase();
      const itemTags = (item.tags || []).map((t) => t.toLowerCase());

      // Exact name match
      if (name === trimmedQuery) {
        score += 120;
      } else if (name.startsWith(trimmedQuery)) {
        score += 90;
      } else if (name.includes(trimmedQuery)) {
        score += 65;
      }

      // Token matching in name
      const matchedTokensInName = queryTokens.filter((t) =>
        name.includes(t),
      ).length;
      if (matchedTokensInName === queryTokens.length) {
        score += 45;
      } else if (matchedTokensInName > 0) {
        score += 20 * matchedTokensInName;
      }

      // Category / SubCategory match
      if (
        cat === trimmedQuery ||
        cat.includes(trimmedQuery) ||
        trimmedQuery.includes(cat)
      ) {
        score += 40;
      }
      if (subCat.includes(trimmedQuery)) {
        score += 25;
      }

      // Tags matching
      for (const t of itemTags) {
        if (
          t === trimmedQuery ||
          t.includes(trimmedQuery) ||
          trimmedQuery.includes(t)
        ) {
          score += 35;
          break;
        }
      }

      // Brand match
      if (brand && (brand === trimmedQuery || brand.includes(trimmedQuery))) {
        score += 25;
      }

      // Description match
      if (desc.includes(trimmedQuery)) {
        score += 15;
      }

      if (score > 0) {
        scoredItems.push({ product: item, score });
      }
    }

    scoredItems.sort(
      (a, b) => b.score - a.score || b.product.sales - a.product.sales,
    );
    results = scoredItems.map((s) => s.product);
  }

  // 2. Category filter
  if (category && category !== "all" && category !== "all-categories") {
    const normCategory = category.toLowerCase().replace(/-/g, " ");
    results = results.filter((p) => {
      const pCat = (p.category || "").toLowerCase().replace(/-/g, " ");
      return (
        pCat === normCategory ||
        pCat.includes(normCategory) ||
        normCategory.includes(pCat)
      );
    });
  }

  // 3. Price range filter
  if (typeof minPrice === "number" && !isNaN(minPrice)) {
    results = results.filter((p) => p.price >= minPrice);
  }
  if (typeof maxPrice === "number" && !isNaN(maxPrice)) {
    results = results.filter((p) => p.price <= maxPrice);
  }

  // 4. Rating filter
  if (typeof rating === "number" && !isNaN(rating) && rating > 0) {
    results = results.filter((p) => (p.rating || 0) >= rating);
  }

  // 5. In-stock filter
  if (inStock) {
    results = results.filter((p) => p.inStock);
  }

  // 6. Tag filter
  if (tag) {
    const normTag = tag.toLowerCase();
    results = results.filter((p) =>
      (p.tags || []).some(
        (t) => t.toLowerCase() === normTag || t.toLowerCase().includes(normTag),
      ),
    );
  }
  if (tags && tags.length > 0) {
    const normTags = tags.map((t) => t.toLowerCase());
    results = results.filter((p) =>
      (p.tags || []).some((t) => normTags.includes(t.toLowerCase())),
    );
  }

  // 7. Sorting
  switch (sortBy) {
    case "Price: Low to High":
    case "price_asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
    case "price_desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "Rating: High to Low":
    case "rating":
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "Popular":
    case "popular":
      results.sort((a, b) => b.sales - a.sales);
      break;
    case "Latest":
    default:
      if (!trimmedQuery) {
        // Natural order
      }
      break;
  }

  return results;
}

/**
 * Get instant suggestions, matched categories, and matched tags for live search popover.
 */
export function getSearchSuggestions(
  query: string,
  limit = 5,
): AutocompleteResult {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return { products: [], categories: [], tags: [], totalMatches: 0 };
  }

  const allMatched = searchProducts(products, { query: trimmed });

  // Matching categories
  const categoriesSet = new Set<string>();
  const tagsSet = new Set<string>();

  for (const p of products) {
    const cat = p.category || "";
    if (
      cat.toLowerCase().includes(trimmed) ||
      trimmed.includes(cat.toLowerCase())
    ) {
      categoriesSet.add(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
    for (const t of p.tags || []) {
      if (
        t.toLowerCase().includes(trimmed) ||
        trimmed.includes(t.toLowerCase())
      ) {
        tagsSet.add(t.charAt(0).toUpperCase() + t.slice(1));
      }
    }
  }

  return {
    products: allMatched.slice(0, limit),
    categories: Array.from(categoriesSet).slice(0, 3),
    tags: Array.from(tagsSet).slice(0, 4),
    totalMatches: allMatched.length,
  };
}
