import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";
import { accountLinks } from "data/accounts";
import { Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "providers/AuthProvider";
import { paths } from "routes/paths";
import Iconify from "components/base/Iconify";
import ExitIcon from "components/icons/ExitIcon";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signOut, isAdmin } = useAuth();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut();
    navigate(paths.signIn);
  };

  const navItems = [...accountLinks];
  if (isAdmin) {
    if (!navItems.some((item) => item.path === "admin-product-upload")) {
      navItems.push({
        id: 99,
        icon: <Iconify icon="solar:box-bold" sx={{ fontSize: 20 }} />,
        title: "Upload Product",
        path: "admin-product-upload",
      });
    }
    if (!navItems.some((item) => item.path === "admin-create-blog")) {
      navItems.push({
        id: 100,
        icon: <Iconify icon="solar:document-add-bold" sx={{ fontSize: 20 }} />,
        title: "Create Blog",
        path: "admin-create-blog",
      });
    }
  }

  return (
    <Box
      aria-label="account-navigation"
      sx={{
        py: 1,
        width: 1,
        maxWidth: { xs: "100%", md: 280 },
        flexShrink: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, px: 3, py: 1.5 }}>
        Navigation
      </Typography>
      <List
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        {navItems.map((item) => {
          const isAdminUpload = item.path === "admin-product-upload";
          const isAdminBlog = item.path === "admin-create-blog";
          const itemHref = isAdminUpload
            ? "/admin/product-upload"
            : isAdminBlog
              ? "/admin/create-blog"
              : item.path === "wishlist"
                ? "/wishlist"
                : item.path === "shopping-cart"
                  ? "/cart"
                  : `/account/${item.path}`;

          const isActive =
            (isAdminUpload
              ? pathname === "/admin/product-upload"
              : isAdminBlog
                ? pathname === "/admin/create-blog"
                : item.path === "dashboard"
                  ? pathname === "/account" || pathname === "/account/dashboard"
                  : pathname.startsWith(`/account/${item.path}`) ||
                    (item.path === "wishlist" && pathname === "/wishlist") ||
                    (item.path === "shopping-cart" && pathname === "/cart"));

          return (
            <ListItem
              key={item.id}
              component={Link}
              href={itemHref}
              disablePadding
            >
              <ListItemButton
                sx={{
                  px: 2.5,
                  borderRadius: 0,
                  bgcolor: isActive ? "#EDF2EE" : "transparent",
                  "&:hover": {
                    bgcolor: isActive ? "#EDF2EE" : "grey.100",
                  },
                  "&::before": {
                    position: "absolute",
                    content: '""',
                    top: 0,
                    left: 0,
                    width: 3,
                    height: 1,
                    bgcolor: isActive ? "primary.main" : "transparent",
                  },
                }}
              >
                <ListItemIcon
                  sx={{ color: isActive ? "text.primary" : "grey.400" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    [`& .${listItemTextClasses.primary}`]: {
                      color: isActive ? "text.primary" : "text.secondary",
                      fontSize: "body1.fontSize",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 1.5, borderColor: "divider" }} />

      <Box sx={{ px: 2, pb: 1 }}>
        <Button
          fullWidth
          onClick={handleLogout}
          startIcon={<ExitIcon sx={{ fontSize: 20 }} />}
          disableRipple
          sx={(theme) => ({
            bgcolor: `${alpha(theme.palette.error.main, 0.1)} !important`,
            color: `${theme.palette.error.main} !important`,
            fontWeight: 500,
            py: 1.25,
            borderRadius: Number(theme.shape.borderRadius) * 12,
            boxShadow: "none !important",
            border: "none !important",
            transition: "none",
            "&:hover": {
              bgcolor: `${alpha(theme.palette.error.main, 0.1)} !important`,
              color: `${theme.palette.error.main} !important`,
              boxShadow: "none !important",
              transform: "none !important",
            },
            "&:active": {
              bgcolor: `${alpha(theme.palette.error.main, 0.1)} !important`,
              color: `${theme.palette.error.main} !important`,
              boxShadow: "none !important",
              transform: "none !important",
            },
            "&:focus": {
              bgcolor: `${alpha(theme.palette.error.main, 0.1)} !important`,
              color: `${theme.palette.error.main} !important`,
              boxShadow: "none !important",
            },
          })}
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
};

export default Navigation;
