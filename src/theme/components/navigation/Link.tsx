import type { Theme, Components } from "@mui/material/styles";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";
import { forwardRef } from "react";

export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const Link: Components<Theme>["MuiLink"] = {
  defaultProps: {
    underline: "none",
    component: LinkBehavior,
  },
};

export default Link;
