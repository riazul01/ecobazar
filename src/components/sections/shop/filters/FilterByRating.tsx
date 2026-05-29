import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterCollapse from "./FilterCollapse";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const ratings = [
  { value: 5, label: "5.0" },
  { value: 4, label: "4.0 & up" },
  { value: 3, label: "3.0 & up" },
  { value: 2, label: "2.0 & up" },
  { value: 1, label: "1.0 & up" },
];

const FilterByRating = () => {
  return (
    <FilterCollapse title="Rating" defaultOpen>
      <FormGroup sx={{ gap: 1 }}>
        {ratings.map((rating) => (
          <FormControlLabel
            control={<Checkbox defaultChecked={false} />}
            label={
              <Stack sx={{ alignItems: "center", gap: 1 }}>
                <Rating
                  name="half-rating"
                  size="small"
                  defaultValue={rating.value}
                  readOnly
                />
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {rating.label}
                </Typography>
              </Stack>
            }
          />
        ))}
      </FormGroup>
    </FilterCollapse>
  );
};

export default FilterByRating;
