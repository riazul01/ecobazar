import type { Theme, Components } from "@mui/material/styles";
import { LinkBehavior } from "theme/components/navigation/Link";

const ButtonBase: Components<Theme>["MuiButtonBase"] = {
  defaultProps: {
    LinkComponent: LinkBehavior,
  },
};

export default ButtonBase;
