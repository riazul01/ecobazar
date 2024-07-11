import {
  fruits,
  vegetables,
  meatFish,
  snacks,
  beverages,
  beauty,
  bakery,
  baking,
  cooking,
  diabetic,
  oil,
  detergents,
} from './images';

export interface Category {
  id: number;
  title: string;
  image: string;
  path: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Fresh Fruits',
    image: fruits,
    path: '#!',
  },
  {
    id: 2,
    title: 'Fresh Vegetables',
    image: vegetables,
    path: '#!',
  },
  {
    id: 3,
    title: 'Meat & Fish',
    image: meatFish,
    path: '#!',
  },
  {
    id: 4,
    title: 'Snacks',
    image: snacks,
    path: '#!',
  },
  {
    id: 5,
    title: 'Beverages',
    image: beverages,
    path: '#!',
  },
  {
    id: 6,
    title: 'Beauty & Health',
    image: beauty,
    path: '#!',
  },
  {
    id: 7,
    title: 'Bread & Bakery',
    image: bakery,
    path: '#!',
  },
  {
    id: 8,
    title: 'Baking Needs',
    image: baking,
    path: '#!',
  },
  {
    id: 9,
    title: 'Cooking',
    image: cooking,
    path: '#!',
  },
  {
    id: 10,
    title: 'Diabetic Food',
    image: diabetic,
    path: '#!',
  },
  {
    id: 11,
    title: 'Dish Detergents',
    image: detergents,
    path: '#!',
  },
  {
    id: 12,
    title: 'Oil',
    image: oil,
    path: '#!',
  },
];
