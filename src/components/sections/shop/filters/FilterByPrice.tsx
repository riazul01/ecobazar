import { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import FilterCollapse from "./FilterCollapse";

function valuetext(value: number) {
  return `${value} $`;
}

const FilterByPrice = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (_event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <FilterCollapse title="Price" defaultOpen>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Typography variant="body1">
        <Typography component="span" sx={{ color: "text.secondary" }}>
          Price:
        </Typography>{" "}
        ${value[0]} - ${value[1]}
      </Typography>
    </FilterCollapse>
  );
};

export default FilterByPrice;
