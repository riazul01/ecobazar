import { SvgIcon, type SvgIconProps } from "@mui/material";

const RadioIcon = (props: SvgIconProps) => {
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
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        fill="white"
        stroke="currentColor"
      />
    </SvgIcon>
  );
};

export default RadioIcon;
