import { useSearchParams } from "react-router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FilterCollapse from "./FilterCollapse";

const ratings = [
  { value: 5, label: "5.0" },
  { value: 4, label: "4.0 & up" },
  { value: 3, label: "3.0 & up" },
  { value: 2, label: "2.0 & up" },
  { value: 1, label: "1.0 & up" },
];

const FilterByRating = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRating = searchParams.get("rating") ? Number(searchParams.get("rating")) : null;

  const handleToggleRating = (ratingValue: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (currentRating === ratingValue) {
      newParams.delete("rating");
    } else {
      newParams.set("rating", String(ratingValue));
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FilterCollapse title="Rating" defaultOpen>
      <FormGroup sx={{ gap: 1 }}>
        {ratings.map((rating) => {
          const isChecked = currentRating === rating.value;
          return (
            <FormControlLabel
              key={rating.value}
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleToggleRating(rating.value)}
                />
              }
              label={
                <Stack sx={{ alignItems: "center", gap: 1 }}>
                  <Rating
                    name={`rating-filter-${rating.value}`}
                    size="small"
                    value={rating.value}
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {rating.label}
                  </Typography>
                </Stack>
              }
            />
          );
        })}
      </FormGroup>
    </FilterCollapse>
  );
};

export default FilterByRating;
