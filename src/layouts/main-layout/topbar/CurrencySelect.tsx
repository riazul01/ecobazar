import { currencies, type Currency } from "data/currencies";
import type { SxProps } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { listClasses } from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography, { typographyClasses } from "@mui/material/Typography";
import ArrowIcon from "components/icons/ArrowIcon";

interface CurrencySelectProps {
  sx?: SxProps;
}

const CurrencySelect = ({ sx }: CurrencySelectProps) => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: Currency) => {
    setCurrency(item);
    handleMenuClose();
  };

  return (
    <>
      <Tooltip title={currency.code}>
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
            {currency.code}
          </Typography>
          <ArrowIcon sx={{ color: "text.secondary", fontSize: 10 }} />
        </Stack>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="currency-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          mt: 1.5,
          [`& .${listClasses.root}`]: {
            width: 80,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {currencies.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{
                mb: 0.25,
                bgcolor: item.id === currency.id ? "grey.100" : null,
              }}
            >
              <ListItemText>{item.code}</ListItemText>
              <ListItemText
                sx={{ [`.${typographyClasses.root}`]: { textAlign: "right" } }}
              >
                {item.symbol}
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CurrencySelect;
