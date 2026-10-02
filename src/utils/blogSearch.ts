import { blogs, type Blog } from "data/blogs";

export interface BlogAutocompleteResult {
  blogs: Blog[];
  categories: string[];
  tags: string[];
  totalMatches: number;
}

export function searchBlogs(query: string = ""): Blog[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [...blogs];

  const queryTokens = trimmed.split(/\s+/).filter(Boolean);

  const scored = blogs
    .map((blog) => {
      let score = 0;
      const title = blog.title.toLowerCase();
      const desc = (blog.desc || "").toLowerCase();
      const cat = blog.category.toLowerCase();
      const author = blog.author.toLowerCase();
      const tags = blog.tags.map((t) => t.toLowerCase());

      if (title === trimmed) {
        score += 120;
      } else if (title.startsWith(trimmed)) {
        score += 90;
      } else if (title.includes(trimmed)) {
        score += 65;
      }

      const matchedTokensInTitle = queryTokens.filter((t) =>
        title.includes(t),
      ).length;
      if (matchedTokensInTitle === queryTokens.length) {
        score += 45;
      } else if (matchedTokensInTitle > 0) {
        score += 20 * matchedTokensInTitle;
      }

      if (cat === trimmed || cat.includes(trimmed) || trimmed.includes(cat)) {
        score += 40;
      }

      if (author.includes(trimmed)) {
        score += 30;
      }

      for (const t of tags) {
        if (t === trimmed || t.includes(trimmed) || trimmed.includes(t)) {
          score += 35;
          break;
        }
      }

      if (desc.includes(trimmed)) {
        score += 15;
      }

      return { blog, score };
    })
    .filter((item) => item.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.map((item) => item.blog);
}

export function getBlogSearchSuggestions(
  query: string,
  limit = 5,
): BlogAutocompleteResult {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return { blogs: [], categories: [], tags: [], totalMatches: 0 };
  }

  const allMatched = searchBlogs(trimmed);

  const categoriesSet = new Set<string>();
  const tagsSet = new Set<string>();

  for (const b of blogs) {
    const cat = b.category || "";
    if (
      cat.toLowerCase().includes(trimmed) ||
      trimmed.includes(cat.toLowerCase())
    ) {
      categoriesSet.add(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
    for (const t of b.tags || []) {
      if (
        t.toLowerCase().includes(trimmed) ||
        trimmed.includes(t.toLowerCase())
      ) {
        tagsSet.add(t.charAt(0).toUpperCase() + t.slice(1));
      }
    }
  }

  return {
    blogs: allMatched.slice(0, limit),
    categories: Array.from(categoriesSet).slice(0, 3),
    tags: Array.from(tagsSet).slice(0, 4),
    totalMatches: allMatched.length,
  };
}
