import type { ReactNode } from "react";
import ExitIcon from "components/icons/ExitIcon";
import DashboardIcon from "components/icons/DashboardIcon";
import RefreshIcon from "components/icons/RefreshIcon";
import HeartIcon from "components/icons/HeartIcon";
import ShoppingBagIcon from "components/icons/ShoppingBagIcon";
import CogIcon from "components/icons/CogIcon";

export interface AccountLink {
  id: number;
  icon: ReactNode;
  title: string;
  path: string;
  active?: boolean;
}

export const accountLinks: AccountLink[] = [
  {
    id: 1,
    icon: <DashboardIcon />,
    title: "Dashboard",
    path: "dashboard",
    active: true,
  },
  {
    id: 2,
    icon: <RefreshIcon />,
    title: "Order History",
    path: "order-history",
  },
  {
    id: 3,
    icon: <HeartIcon />,
    title: "Wishlist",
    path: "wishlist",
  },
  {
    id: 4,
    icon: <ShoppingBagIcon />,
    title: "Shopping Cart",
    path: "shopping-cart",
  },
  {
    id: 5,
    icon: <CogIcon />,
    title: "Settings",
    path: "settings",
  },
  {
    id: 6,
    icon: <ExitIcon />,
    title: "Log-out",
    path: "log-out",
  },
];
