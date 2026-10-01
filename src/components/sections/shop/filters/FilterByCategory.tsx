import { useSearchParams } from "react-router";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FilterCollapse from "./FilterCollapse";

const items = [
  { label: "All Categories", value: "" },
  { label: "Fresh Fruit", value: "fruits" },
  { label: "Vegetables", value: "vegetables" },
  { label: "Cooking", value: "cooking" },
  { label: "Snacks", value: "snacks" },
  { label: "Beverages", value: "beverages" },
  { label: "Beauty & Health", value: "beauty-health" },
  { label: "Bread & Bakery", value: "bread-bakery" },
];

const FilterByCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (!value) {
      newParams.delete("category");
    } else {
      newParams.set("category", value);
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FilterCollapse title="Categories" defaultOpen>
      <FormControl sx={{ width: 1 }}>
        <RadioGroup
          aria-labelledby="all-categories"
          value={currentCategory}
          onChange={handleChange}
          name="radio-buttons-group"
          sx={{ gap: 1.5 }}
        >
          {items.map((item) => {
            return (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio sx={{ p: 0 }} />}
                label={item.label}
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
