import { SvgIcon, type SvgIconProps } from "@mui/material";

const BoxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_460_40930)">
        <rect
          opacity="0.1"
          width="20"
          height="20"
          rx="10"
          fill="currentColor"
        />
        <path
          d="M14.4168 7.125L8.68766 12.8542L6.0835 10.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="clip0_460_40930">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default BoxIcon;
