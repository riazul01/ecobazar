import { useState } from "react";
import { useBreakpoints } from "providers/BreakpointProvider";
import { useCart } from "providers/CartProvider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Dialog from "@mui/material/Dialog";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SectionWrapper from "components/sections/SectionWrapper";
import ShoppingBagLightIcon from "components/icons/ShoppingBagLightIcon";
import HeartLightIcon from "components/icons/HeartLightIcon";
import Iconify from "components/base/Iconify";
import Logo from "components/common/Logo";
import SearchBox from "components/common/SearchBox";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const { downSm } = useBreakpoints();
  const { openCart, totalCount, subtotal } = useCart();

  return (
    <>
      <SectionWrapper
        sx={{
          py: 2,
          gap: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        {!downSm && <SearchBox showSearchButton={true} />}

        <Stack sx={{ gap: 1.75, alignItems: "center" }}>
          <ButtonBase
            onClick={() => setOpenSearch(true)}
            sx={{ display: { sm: "none" } }}
            disableRipple
          >
            <Iconify
              icon="prime:search"
              sx={{ fontSize: 26, color: "text.secondary" }}
            />
          </ButtonBase>
          <Badge
            component={Link}
            href="/wishlist"
            badgeContent={2}
            color="success"
          >
            <HeartLightIcon
              sx={{ color: "text.primary", fontSize: { xs: 28, md: 34 } }}
            />
          </Badge>
          <Typography
            variant="h4"
            sx={{
              color: "divider",
              fontWeight: 200,
              display: { xs: "none", md: "flex" },
            }}
          >
            |
          </Typography>
          <ButtonBase
            onClick={openCart}
            disableRipple
            aria-label="Open shopping cart"
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "center",
              flexShrink: 0,
              cursor: "pointer",
              textAlign: "left",
              "&:hover .shopping-bag-icon": {
                transform: "scale(1.08)",
              },
            }}
          >
            <Badge badgeContent={totalCount} color="success">
              <ShoppingBagLightIcon
                className="shopping-bag-icon"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: 28, md: 36 },
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Badge>
            <Stack
              direction="column"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "flex-start",
              }}
            >
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Shopping cart:
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.primary", fontWeight: 600 }}>
                ${subtotal.toFixed(2)}
              </Typography>
            </Stack>
          </ButtonBase>
        </Stack>
      </SectionWrapper>

      {downSm && (
        <Dialog
          open={openSearch}
          onClose={() => setOpenSearch(false)}
          fullScreen={downSm}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "transparent",
                borderRadius: 2,
              },
            },
          }}
        >
          <IconButton
            size="small"
            onClick={() => setOpenSearch(false)}
            sx={(theme) => ({
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: `${theme.palette.error.main} !important`,
              zIndex: 99,
            })}
          >
            <Iconify icon="mdi:close" sx={{ color: "white", fontSize: 18 }} />
          </IconButton>
          <SearchBox showSearchButton={true} />
        </Dialog>
      )}
    </>
  );
};

export default Header;
