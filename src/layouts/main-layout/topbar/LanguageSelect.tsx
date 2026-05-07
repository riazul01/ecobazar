import { languages, type Language } from "data/languages";
import type { SxProps } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { listClasses } from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography, { typographyClasses } from "@mui/material/Typography";
import ArrowIcon from "components/icons/ArrowIcon";
import Iconify from "components/base/Iconify";

interface LanguageSelectProps {
  sx?: SxProps;
}

const LanguageSelect = ({ sx }: LanguageSelectProps) => {
  const [language, setLanguage] = useState(languages[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: Language) => {
    setLanguage(item);
    handleMenuClose();
  };

  return (
    <>
      <Tooltip title={language.lang}>
        <Stack
          component={ButtonBase}
          onClick={handleMenuOpen}
          disableRipple
          sx={{
            gap: 0.5,
            px: 0.75,
            alignItems: "center",
            borderRadius: 1,
            width: 50,
            ...sx,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textTransform: "capitalize" }}
          >
            {language.code}
          </Typography>
          <ArrowIcon sx={{ color: "text.secondary", fontSize: 10 }} />
        </Stack>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          mt: 1.5,
          [`& .${listClasses.root}`]: {
            width: 180,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {languages.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{
                mb: 0.25,
                bgcolor: item.id === language.id ? "grey.100" : null,
              }}
            >
              <ListItemIcon>
                <Iconify icon={item.flag} />
              </ListItemIcon>
              <ListItemText>{item.lang}</ListItemText>
              <ListItemText
                sx={{ [`.${typographyClasses.root}`]: { textAlign: "right" } }}
              >
                {item.code}
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageSelect;
