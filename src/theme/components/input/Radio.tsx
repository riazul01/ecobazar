import type { Theme, Components } from "@mui/material/styles";
import RadioCheckedIcon from "components/icons/RadioCheckedIcon";
import RadioIcon from "components/icons/RadioIcon";

const Radio: Components<Theme>["MuiRadio"] = {
  defaultProps: {
    icon: <RadioIcon sx={{ color: "grey.300", fontSize: 20 }} />,
    checkedIcon: <RadioCheckedIcon sx={{ fontSize: 20 }} />,
  },
};

export default Radio;
