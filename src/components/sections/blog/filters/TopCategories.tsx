import { useSearchParams } from "react-router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilterWrapper from "./FilterWrapper";
import { blogs } from "data/blogs";

const categories = [
  "Fresh Fruit",
  "Vegetables",
  "Cooking",
  "Snacks",
  "Beverages",
  "Beauty & Health",
  "Bread & Bakery",
  "Healthy",
];

const TopCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleSelectCategory = (categoryName: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (currentCategory.toLowerCase() === categoryName.toLowerCase()) {
      newParams.delete("category");
    } else {
      newParams.set("category", categoryName);
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  const getCount = (catName: string) => {
    return blogs.filter(
      (b) =>
        b.category.toLowerCase() === catName.toLowerCase() ||
        b.tags.some((t) => t.toLowerCase() === catName.toLowerCase()),
    ).length;
  };

  return (
    <FilterWrapper title="Top Categories">
      {categories.map((catName) => {
        const isSelected =
          currentCategory.toLowerCase() === catName.toLowerCase();
        const count = getCount(catName);

        return (
          <Stack
            key={catName}
            onClick={() => handleSelectCategory(catName)}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              cursor: "pointer",
              transition: "none",
              color: isSelected ? "primary.main" : "text.primary",
              fontWeight: 400,
            }}
          >
            <Typography
              sx={{
                fontSize: "body2.fontSize",
                fontWeight: 400,
                color: "inherit",
              }}
            >
              {catName}
            </Typography>
            <Typography
              sx={{
                color: isSelected ? "primary.main" : "text.disabled",
                fontSize: "body2.fontSize",
                fontWeight: 400,
              }}
            >
              {`(${count || 5})`}
            </Typography>
          </Stack>
        );
      })}
    </FilterWrapper>
  );
};

export default TopCategories;
