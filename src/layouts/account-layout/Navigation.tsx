import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import { accountLinks } from "data/accounts";
import { Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "providers/AuthProvider";
import { paths } from "routes/paths";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut();
    navigate(paths.signIn);
  };

  return (
    <Box
      aria-label="account-navigation"
      sx={{
        py: 1,
        width: 1,
        maxWidth: 280,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
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
        {accountLinks.map((item) => {
          const isLogout = item.path === "log-out";
          const itemHref =
            item.path === "wishlist"
              ? "/wishlist"
              : item.path === "shopping-cart"
                ? "/cart"
                : `/account/${item.path}`;

          const isActive =
            !isLogout &&
            (item.path === "dashboard"
              ? pathname === "/account" || pathname === "/account/dashboard"
              : pathname.startsWith(`/account/${item.path}`) ||
                (item.path === "wishlist" && pathname === "/wishlist") ||
                (item.path === "shopping-cart" && pathname === "/cart"));

          return (
            <ListItem
              key={item.id}
              component={Link}
              href={isLogout ? "#!" : itemHref}
              onClick={isLogout ? handleLogout : undefined}
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
                  sx={{ color: isActive ? "text.primary" : "grey.300" }}
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
    </Box>
  );
};

export default Navigation;
