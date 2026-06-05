import { SvgIcon, type SvgIconProps } from "@mui/material";

const ArrowDownIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ fontSize: 14 }}
      {...props}
    >
      <path
        d="M2.91634 4.95834L6.99967 9.04168L11.083 4.95834"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

export default ArrowDownIcon;
