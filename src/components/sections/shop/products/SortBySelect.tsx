import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

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
        <MenuItem value="Latest">Latest</MenuItem>
        <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
        <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBySelect;
