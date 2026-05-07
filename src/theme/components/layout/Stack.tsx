import type { Theme, Components } from "@mui/material/styles";

const Stack: Components<Theme>["MuiStack"] = {
  defaultProps: {
    useFlexGap: true,
    direction: "row",
  },
};

export default Stack;
