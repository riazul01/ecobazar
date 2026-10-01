import { useState } from "react";
import { useSearchParams } from "react-router";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import FilterCollapse from "./FilterCollapse";

function valuetext(value: number) {
  return `$${value}`;
}

const FilterByPrice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const minParam = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : 0;
  const maxParam = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : 100;

  const [value, setValue] = useState<number[]>([minParam, maxParam]);
  const [prevBounds, setPrevBounds] = useState({
    min: minParam,
    max: maxParam,
  });

  if (prevBounds.min !== minParam || prevBounds.max !== maxParam) {
    setPrevBounds({ min: minParam, max: maxParam });
    setValue([minParam, maxParam]);
  }

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleChangeCommitted = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[],
  ) => {
    const val = newValue as number[];
    const newParams = new URLSearchParams(searchParams);
    if (val[0] > 0) {
      newParams.set("minPrice", String(val[0]));
    } else {
      newParams.delete("minPrice");
    }
    if (val[1] < 100) {
      newParams.set("maxPrice", String(val[1]));
    } else {
      newParams.delete("maxPrice");
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FilterCollapse title="Price" defaultOpen>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        min={0}
        max={100}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ color: "primary.main" }}
      />
      <Typography variant="body1">
        <Typography component="span" sx={{ color: "text.secondary" }}>
          Price:
        </Typography>{" "}
        ${value[0]} — ${value[1]}
      </Typography>
    </FilterCollapse>
  );
};

export default FilterByPrice;
