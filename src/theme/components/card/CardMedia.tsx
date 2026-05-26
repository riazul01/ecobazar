import type { Theme, Components } from "@mui/material/styles";

const CardMedia: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: {},
    img: ({ theme }) => ({
      borderRadius: Number(theme.shape.borderRadius) * 0.5,
    }),
  },
};

export default CardMedia;
