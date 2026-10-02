import { useSearchParams } from "react-router";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { inputBaseClasses } from "@mui/material/InputBase";

const sortCategories = [
  { label: "Latest", value: "Latest" },
  { label: "Price: Low to High", value: "Price: Low to High" },
  { label: "Price: High to Low", value: "Price: High to Low" },
  { label: "Rating: High to Low", value: "Rating: High to Low" },
  { label: "Popular", value: "Popular" },
];

interface SortOption {
  label: string;
  value: string;
}

interface SortBySelectProps {
  options?: SortOption[];
  ariaLabel?: string;
}

const SortBySelect = ({
  options = sortCategories,
  ariaLabel = "Sort items",
}: SortBySelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "Latest";

  const handleChange = (event: SelectChangeEvent) => {
    const nextSort = event.target.value as string;
    const newParams = new URLSearchParams(searchParams);
    if (nextSort === "Latest") {
      newParams.delete("sort");
    } else {
      newParams.set("sort", nextSort);
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={currentSort}
        onChange={handleChange}
        inputProps={{ "aria-label": ariaLabel }}
        sx={{ [`&.${inputBaseClasses.root}`]: { px: 1.25, py: 0.75 } }}
      >
        {options.map((category) => (
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
