import { SvgIcon, type SvgIconProps } from "@mui/material";

const RadioCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.75"
        y="0.75"
        width="18.5"
        height="18.5"
        rx="9.25"
        fill="white"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <rect x="4" y="4" width="12" height="12" rx="6" fill="currentColor" />
    </SvgIcon>
  );
};

export default RadioCheckedIcon;
