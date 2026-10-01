import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { inputBaseClasses } from "@mui/material/InputBase";

const sortCategories = [
  { label: "Latest", value: "Latest" },
  { label: "Price: Low to High", value: "Price: Low to High" },
  { label: "Price: High to Low", value: "Price: High to Low" },
];

const SortBySelect = () => {
  const [sortBy, setSortBy] = useState("Latest");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={sortBy}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={{ [`&.${inputBaseClasses.root}`]: { px: 1.25, py: 0.75 } }}
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
