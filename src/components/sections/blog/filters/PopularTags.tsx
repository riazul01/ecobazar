import { useSearchParams } from "react-router";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FilterWrapper from "./FilterWrapper";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Launch",
  "Meat",
  "Dinner",
  "Organic",
  "Superfoods",
  "Lifestyle",
];

const PopularTags = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTag = searchParams.get("tag") || "";

  const handleToggleTag = (tag: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (currentTag.toLowerCase() === tag.toLowerCase()) {
      newParams.delete("tag");
    } else {
      newParams.set("tag", tag);
    }
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <FilterWrapper title="Popular Tags">
      <Stack sx={{ gap: 1, flexWrap: "wrap" }}>
        {tags.map((tag) => {
          const isSelected = currentTag.toLowerCase() === tag.toLowerCase();

          return (
            <Chip
              key={tag}
              label={tag}
              onClick={() => handleToggleTag(tag)}
              sx={{
                cursor: "pointer",
                borderRadius: 8,
                fontSize: "0.875rem",
                height: 34,
                px: 0.5,
                transition: "none",
                boxShadow: "none",
                "&:focus": {
                  boxShadow: "none",
                },
                "&:active": {
                  boxShadow: "none",
                },
                ...(isSelected
                  ? {
                      bgcolor: "primary.main",
                      color: "common.white",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "common.white",
                        boxShadow: "none",
                      },
                    }
                  : {
                      bgcolor: "grey.100",
                      color: "text.primary",
                      "&:hover": {
                        bgcolor: "grey.100",
                        color: "text.primary",
                        boxShadow: "none",
                      },
                    }),
              }}
            />
          );
        })}
      </Stack>
    </FilterWrapper>
  );
};

export default PopularTags;
