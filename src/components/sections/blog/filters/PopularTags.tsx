import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FilterWrapper from "./FilterWrapper";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Launch",
  "Meat",
  "Dinner",
];

const PopularTags = () => {
  return (
    <FilterWrapper title="Popular Tags">
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
    </FilterWrapper>
  );
};

export default PopularTags;
