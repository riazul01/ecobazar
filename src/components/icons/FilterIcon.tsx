import { SvgIcon, type SvgIconProps } from "@mui/material";

const FilterIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.75 4.75H8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 13.75H3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="4.75"
        cy="4.75"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="16.75"
        cy="13.75"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </SvgIcon>
  );
};

export default FilterIcon;
