import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

const sortCategories = [
  { label: "Latest", value: "Latest" },
  { label: "Price: Low to High", value: "Price: Low to High" },
  { label: "Price: High to Low", value: "Price: High to Low" },
];

const SortBySelect = () => {
  const [age, setAge] = React.useState("Latest");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={age}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        {sortCategories.map((category) => (
          <MenuItem
            key={category.value}
            value={category.value}
            sx={{ mb: 0.25 }}
          >
            {category.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortBySelect;
