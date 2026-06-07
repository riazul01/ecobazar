import type { ReactNode } from "react";
import Typography from "@mui/material/Typography";

interface FilterWrapperProps {
  title: string;
  children: ReactNode;
}

const FilterWrapper = ({ title, children }: FilterWrapperProps) => {
  return (
    <>
      <Typography
        sx={{
          color: "text.primary",
          fontSize: "h6.fontSize",
          fontWeight: 500,
          mb: 2.25,
        }}
      >
        {title}
      </Typography>
      {children}
    </>
  );
};

export default FilterWrapper;
