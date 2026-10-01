import { useSearchParams } from "react-router";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import FilterCollapse from "./FilterCollapse";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Fresh Produce",
  "Organic",
  "Fruit",
  "Vegetable",
];

const FilterByTag = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTag = searchParams.get("tag") || "";

  const handleToggleTag = (tag: string) => {
    const norm = tag.toLowerCase();
    const newParams = new URLSearchParams(searchParams);
    if (currentTag.toLowerCase() === norm) {
      newParams.delete("tag");
    } else {
      newParams.set("tag", norm);
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FilterCollapse title="Popular Tags" defaultOpen>
      <Stack sx={{ gap: 1, flexWrap: "wrap" }}>
        {tags.map((tag) => {
          const isSelected = currentTag.toLowerCase() === tag.toLowerCase();
          return (
            <Chip
              key={tag}
              label={tag}
              clickable
              onClick={() => handleToggleTag(tag)}
              sx={(theme) => ({
                cursor: "pointer",
                fontSize: "0.8rem",
                borderRadius: 20,
                border: `1px solid ${isSelected ? theme.palette.primary.main : theme.palette.divider}`,
                bgcolor: isSelected
                  ? theme.palette.primary.main
                  : "transparent",
                color: isSelected
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
                outline: "none",
                transition: theme.transitions.create(
                  ["background-color", "border-color", "color"],
                  {
                    duration: 150,
                  },
                ),
                "& .MuiChip-label": {
                  color: isSelected
                    ? theme.palette.common.white
                    : theme.palette.text.primary,
                  px: 1.5,
                },
                "&:hover, &.MuiChip-clickable:hover": {
                  bgcolor: isSelected
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main,
                  borderColor: isSelected
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main,
                  color: theme.palette.common.white,
                  "& .MuiChip-label": {
                    color: theme.palette.common.white,
                  },
                },
                "&:focus, &:focus-visible, &.Mui-focusVisible": {
                  outline: "none",
                  boxShadow: "none",
                  borderColor: isSelected
                    ? theme.palette.primary.main
                    : theme.palette.primary.main,
                },
              })}
            />
          );
        })}
      </Stack>
    </FilterCollapse>
  );
};

export default FilterByTag;
