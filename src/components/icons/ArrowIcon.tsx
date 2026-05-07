import { SvgIcon, type SvgIconProps } from "@mui/material";

const ArrowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 0.5L4 4L0.5 0.5"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

export default ArrowIcon;
