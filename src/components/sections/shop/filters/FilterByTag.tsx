import Chip from "@mui/material/Chip";
import FilterCollapse from "./FilterCollapse";
import Stack from "@mui/material/Stack";

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
    <FilterCollapse title="Price" defaultOpen>
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
