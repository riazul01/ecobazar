import { paths } from "routes/paths";
import {
  fruits,
  vegetables,
  proteins,
  snacks,
  beverages,
  beauty,
  bakery,
  baking,
  cooking,
  diabetic,
  oil,
  detergents,
} from "./images";

export interface Category {
  id: number;
  title: string;
  image: string;
  path: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Fresh Fruits",
    image: fruits,
    path: `${paths.shop}?category=fruits`,
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    image: vegetables,
    path: `${paths.shop}?category=vegetables`,
  },
  {
    id: 3,
    title: "Meat & Fish",
    image: proteins,
    path: `${paths.shop}?category=meat`,
  },
  {
    id: 4,
    title: "Snacks",
    image: snacks,
    path: `${paths.shop}?category=snacks`,
  },
  {
    id: 5,
    title: "Beverages",
    image: beverages,
    path: `${paths.shop}?category=beverages`,
  },
  {
    id: 6,
    title: "Beauty & Health",
    image: beauty,
    path: `${paths.shop}?category=beauty-health`,
  },
  {
    id: 7,
    title: "Bread & Bakery",
    image: bakery,
    path: `${paths.shop}?category=bread-bakery`,
  },
  {
    id: 8,
    title: "Baking Needs",
    image: baking,
    path: `${paths.shop}?category=baking`,
  },
  {
    id: 9,
    title: "Cooking",
    image: cooking,
    path: `${paths.shop}?category=cooking`,
  },
  {
    id: 10,
    title: "Diabetic Food",
    image: diabetic,
    path: `${paths.shop}?category=diabetic`,
  },
  {
    id: 11,
    title: "Dish Detergents",
    image: detergents,
    path: `${paths.shop}?category=detergents`,
  },
  {
    id: 12,
    title: "Oil",
    image: oil,
    path: `${paths.shop}?category=oil`,
  },
];
