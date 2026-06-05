import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FilterCollapse from "./FilterCollapse";

const items = [
  "Fresh Fruit",
  "Vegetables",
  "Cooking",
  "Snacks",
  "Beverages",
  "Beauty & Health",
  "Bread & Bakery",
];

const FilterByCategory = () => {
  return (
    <FilterCollapse title="All Categories" defaultOpen>
      <FormControl>
        <RadioGroup
          aria-labelledby="all-categories"
          defaultValue="vegetables"
          name="radio-buttons-group"
          sx={{ gap: 1.5 }}
        >
          {items.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item.toLowerCase().replace(/ & /g, "-")}
                control={<Radio sx={{ p: 0 }} />}
                label={item}
                sx={{
                  [`& .MuiFormControlLabel-label`]: {
                    ml: 1,
                    color: "text.primary",
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </FilterCollapse>
  );
};

export default FilterByCategory;
