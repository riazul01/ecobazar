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
  "Tiffin",
  "Launch",
  "Dinner",
  "Breackfast",
  "Fruit",
];

const FilterByTag = () => {
  return (
    <FilterCollapse title="Popular Tags" defaultOpen>
      <Stack sx={{ gap: 1, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="subtle"
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Stack>
    </FilterCollapse>
  );
};

export default FilterByTag;
