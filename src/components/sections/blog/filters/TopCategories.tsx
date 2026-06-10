import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilterWrapper from "./FilterWrapper";

const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const TopCategories = () => {
  return (
    <FilterWrapper title="Top Categories">
      {categories.map((item) => (
        <Stack
          key={item.name}
          sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}
        >
          <Typography sx={{ fontSize: "body2.fontSize" }}>
            {item.name}
          </Typography>
          <Typography
            sx={{ color: "text.disabled", fontSize: "body2.fontSize" }}
          >
            {`(${item.count})`}
          </Typography>
        </Stack>
      ))}
    </FilterWrapper>
  );
};

export default TopCategories;
