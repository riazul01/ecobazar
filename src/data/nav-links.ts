import { paths } from "routes/paths";

export interface NavLink {
  id: string;
  name: string;
  path: string;
  icon: string;
  active?: boolean;
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: "material-symbols:home-outline-rounded",
    active: true,
  },
  {
    id: "shop",
    name: "Shop",
    icon: "material-symbols:shopping-cart-outline-rounded",
    path: paths.products,
  },
  {
    id: "blog",
    name: "Blog",
    icon: "material-symbols:edit-document-outline-rounded",
    path: paths.blog,
  },
  {
    id: "about",
    name: "About Us",
    icon: "material-symbols:person-outline",
    path: paths.about,
  },
  {
    id: "contact",
    name: "Contact Us",
    icon: "material-symbols:phone-in-talk-outline-rounded",
    path: paths.contact,
  },
];
