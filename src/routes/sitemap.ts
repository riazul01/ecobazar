// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'featured',
    subheader: 'Featured',
    icon: 'mage:star-moving-fill',
    path: '#!',
    active: true,
  },
  {
    id: 'flash-sale',
    subheader: 'Flash Sale',
    icon: 'ph:lightning-duotone',
    path: '#!',
  },
  {
    id: 'offers',
    subheader: 'Offers',
    icon: 'iconamoon:gift-duotone',
    path: '#!',
  },
  {
    id: 'vegetables-fruits',
    subheader: 'Vegetables & Fruits',
    icon: 'icon-park-twotone:vegetables',
    items: [
      {
        name: 'Fresh Vegetables',
        pathName: 'fresh-vegetables',
        path: '#!',
      },
      {
        name: 'Fresh Fruits',
        pathName: 'fresh-fruits',
        path: '#!',
      },
      {
        name: 'Dried Fruits',
        pathName: 'dried-fruits',
        path: '#!',
      },
      {
        name: 'Organic Vegetables',
        pathName: 'organic-vegetables',
        path: '#!',
      },
      {
        name: 'Organic Fruits',
        pathName: 'organic-fruits',
        path: '#!',
      },
      {
        name: 'Exotic Vegetables',
        pathName: 'exotic-vegetables',
        path: '#!',
      },
      {
        name: 'Exotic Fruits',
        pathName: 'exotic-fruits',
        path: '#!',
      },
      {
        name: 'Leafy Greens',
        pathName: 'leafy-greens',
        path: '#!',
      },
      {
        name: 'Berries',
        pathName: 'berries',
        path: '#!',
      },
      {
        name: 'Citrus Fruits',
        pathName: 'citrus-fruits',
        path: '#!',
      },
    ],
  },
  {
    id: 'meat-fish',
    subheader: 'Meat & Fish',
    icon: 'mdi:food-drumstick-outline',
    items: [
      {
        name: 'Fresh Meat',
        pathName: 'fresh-meat',
        path: '#!',
      },
      {
        name: 'Frozen Fish',
        pathName: 'frozen-fish',
        path: '#!',
      },
      {
        name: 'Dried Fish',
        pathName: 'dried-fish',
        path: '#!',
      },
      {
        name: 'Poultry',
        pathName: 'poultry',
        path: '#!',
      },
      {
        name: 'Seafood',
        pathName: 'seafood',
        path: '#!',
      },
      {
        name: 'Shellfish',
        pathName: 'shellfish',
        path: '#!',
      },
      {
        name: 'Game Meat',
        pathName: 'game-meat',
        path: '#!',
      },
      {
        name: 'Sausages',
        pathName: 'sausages',
        path: '#!',
      },
      {
        name: 'Bacon',
        pathName: 'bacon',
        path: '#!',
      },
      {
        name: 'Smoked Fish',
        pathName: 'smoked-fish',
        path: '#!',
      },
    ],
  },
  {
    id: 'kitchen-supplies',
    subheader: 'Kitchen Supplies',
    icon: 'game-icons:flour',
    items: [
      {
        name: 'Rice',
        pathName: 'rice',
        path: '#!',
      },
      {
        name: 'Flour',
        pathName: 'flour',
        path: '#!',
      },
      {
        name: 'Oil',
        pathName: 'oil',
        path: '#!',
      },
      {
        name: 'Salt & Sugar',
        pathName: 'salt-sugar',
        path: '#!',
      },
      {
        name: 'Spices',
        pathName: 'spices',
        path: '#!',
      },
      {
        name: 'Pasta',
        pathName: 'pasta',
        path: '#!',
      },
      {
        name: 'Baking Supplies',
        pathName: 'baking-supplies',
        path: '#!',
      },
      {
        name: 'Canned Goods',
        pathName: 'canned-goods',
        path: '#!',
      },
      {
        name: 'Condiments',
        pathName: 'condiments',
        path: '#!',
      },
      {
        name: 'Vinegar',
        pathName: 'vinegar',
        path: '#!',
      },
    ],
  },
  {
    id: 'jams-jellies',
    subheader: 'Jams & Jellies',
    icon: 'ph:jar-label-duotone',
    items: [
      {
        name: 'Fruit Jams',
        pathName: 'fruit-jams',
        path: '#!',
      },
      {
        name: 'Vegetable Jams',
        pathName: 'vegetable-jams',
        path: '#!',
      },
      {
        name: 'Nut and Seed Jams',
        pathName: 'nut-seed-jams',
        path: '#!',
      },
      {
        name: 'Low-Sugar Jams',
        pathName: 'low-sugar-jams',
        path: '#!',
      },
      {
        name: 'Herbal Jellies',
        pathName: 'herbal-jellies',
        path: '#!',
      },
      {
        name: 'Floral Jellies',
        pathName: 'floral-jellies',
        path: '#!',
      },
      {
        name: 'Gourmet Jellies',
        pathName: 'gourmet-jellies',
        path: '#!',
      },
      {
        name: 'Organic Jellies',
        pathName: 'organic-jellies',
        path: '#!',
      },
      {
        name: 'Seasonal Jellies',
        pathName: 'seasonal-jellies',
        path: '#!',
      },
      {
        name: 'Mixed Fruit Jams',
        pathName: 'mixed-fruit-jams',
        path: '#!',
      },
    ],
  },
  {
    id: 'sauces-pickles',
    subheader: 'Sauces & Pickles',
    icon: 'mdi:soy-sauce',
    items: [
      {
        name: 'Cooking Sauces',
        pathName: 'cooking-sauces',
        path: '#!',
      },
      {
        name: 'Dipping Sauces',
        pathName: 'dipping-sauces',
        path: '#!',
      },
      {
        name: 'Hot Sauces',
        pathName: 'hot-sauces',
        path: '#!',
      },
      {
        name: 'Marinades',
        pathName: 'marinades',
        path: '#!',
      },
      {
        name: 'Salad Dressings',
        pathName: 'salad-dressings',
        path: '#!',
      },
      {
        name: 'Pickles',
        pathName: 'pickles',
        path: '#!',
      },
      {
        name: 'Relishes',
        pathName: 'relishes',
        path: '#!',
      },
      {
        name: 'Chutneys',
        pathName: 'chutneys',
        path: '#!',
      },
      {
        name: 'Pasta Sauces',
        pathName: 'pasta-sauces',
        path: '#!',
      },
      {
        name: 'Soy & Asian Sauces',
        pathName: 'soy-asian-sauces',
        path: '#!',
      },
    ],
  },
  {
    id: 'dairy-eggs',
    subheader: 'Dairy & Eggs',
    icon: 'ph:cheese-duotone',
    items: [
      {
        name: 'Milk',
        pathName: 'milk',
        path: '#!',
      },
      {
        name: 'Cheese',
        pathName: 'cheese',
        path: '#!',
      },
      {
        name: 'Butter',
        pathName: 'butter',
        path: '#!',
      },
      {
        name: 'Yogurt',
        pathName: 'yogurt',
        path: '#!',
      },
      {
        name: 'Cream',
        pathName: 'cream',
        path: '#!',
      },
      {
        name: 'Eggs',
        pathName: 'eggs',
        path: '#!',
      },
      {
        name: 'Non-Dairy Milk',
        pathName: 'non-dairy-milk',
        path: '#!',
      },
      {
        name: 'Cottage Cheese',
        pathName: 'cottage-cheese',
        path: '#!',
      },
      {
        name: 'Sour Cream',
        pathName: 'sour-cream',
        path: '#!',
      },
      {
        name: 'Buttermilk',
        pathName: 'buttermilk',
        path: '#!',
      },
    ],
  },
  {
    id: 'bakery',
    subheader: 'Bakery',
    icon: 'icon-park-twotone:bread',
    items: [
      {
        name: 'Bread',
        pathName: 'bread',
        path: '#!',
      },
      {
        name: 'Buns & Rolls',
        pathName: 'buns-rolls',
        path: '#!',
      },
      {
        name: 'Cakes',
        pathName: 'cakes',
        path: '#!',
      },
      {
        name: 'Pastries',
        pathName: 'pastries',
        path: '#!',
      },
      {
        name: 'Muffins',
        pathName: 'muffins',
        path: '#!',
      },
      {
        name: 'Bagels',
        pathName: 'bagels',
        path: '#!',
      },
      {
        name: 'Cookies',
        pathName: 'cookies',
        path: '#!',
      },
      {
        name: 'Pies',
        pathName: 'pies',
        path: '#!',
      },
      {
        name: 'Tarts',
        pathName: 'tarts',
        path: '#!',
      },
      {
        name: 'Doughnuts',
        pathName: 'doughnuts',
        path: '#!',
      },
    ],
  },
  {
    id: 'beverages',
    subheader: 'Beverages',
    icon: 'icon-park-twotone:drink',
    items: [
      {
        name: 'Coffee',
        pathName: 'coffee',
        path: '#!',
      },
      {
        name: 'Tea',
        pathName: 'tea',
        path: '#!',
      },
      {
        name: 'Juices',
        pathName: 'juices',
        path: '#!',
      },
      {
        name: 'Soft Drinks',
        pathName: 'soft-drinks',
        path: '#!',
      },
      {
        name: 'Water',
        pathName: 'water',
        path: '#!',
      },
      {
        name: 'Energy Drinks',
        pathName: 'energy-drinks',
        path: '#!',
      },
      {
        name: 'Smoothies',
        pathName: 'smoothies',
        path: '#!',
      },
      {
        name: 'Milkshakes',
        pathName: 'milkshakes',
        path: '#!',
      },
      {
        name: 'Sparkling Water',
        pathName: 'sparkling-water',
        path: '#!',
      },
      {
        name: 'Alcoholic Beverages',
        pathName: 'alcoholic-beverages',
        path: '#!',
      },
    ],
  },
  {
    id: 'snacks',
    subheader: 'Snacks',
    icon: 'hugeicons:noodles',
    items: [
      {
        name: 'Chips',
        pathName: 'chips',
        path: '#!',
      },
      {
        name: 'Nuts & Seeds',
        pathName: 'nuts-seeds',
        path: '#!',
      },
      {
        name: 'Crackers',
        pathName: 'crackers',
        path: '#!',
      },
      {
        name: 'Popcorn',
        pathName: 'popcorn',
        path: '#!',
      },
      {
        name: 'Pretzels',
        pathName: 'pretzels',
        path: '#!',
      },
      {
        name: 'Granola Bars',
        pathName: 'granola-bars',
        path: '#!',
      },
      {
        name: 'Fruit Snacks',
        pathName: 'fruit-snacks',
        path: '#!',
      },
      {
        name: 'Jerky',
        pathName: 'jerky',
        path: '#!',
      },
      {
        name: 'Candy',
        pathName: 'candy',
        path: '#!',
      },
      {
        name: 'Chocolate',
        pathName: 'chocolate',
        path: '#!',
      },
    ],
  },
  {
    id: 'frozen-foods',
    subheader: 'Frozen Foods',
    icon: 'mdi:snowflake',
    items: [
      {
        name: 'Frozen Vegetables',
        pathName: 'frozen-vegetables',
        path: '#!',
      },
      {
        name: 'Frozen Fruits',
        pathName: 'frozen-fruits',
        path: '#!',
      },
      {
        name: 'Ice Cream',
        pathName: 'ice-cream',
        path: '#!',
      },
      {
        name: 'Frozen Dinners',
        pathName: 'frozen-dinners',
        path: '#!',
      },
      {
        name: 'Frozen Pizza',
        pathName: 'frozen-pizza',
        path: '#!',
      },
      {
        name: 'Frozen Snacks',
        pathName: 'frozen-snacks',
        path: '#!',
      },
      {
        name: 'Frozen Breakfast',
        pathName: 'frozen-breakfast',
        path: '#!',
      },
      {
        name: 'Frozen Desserts',
        pathName: 'frozen-desserts',
        path: '#!',
      },
      {
        name: 'Frozen Seafood',
        pathName: 'frozen-seafood',
        path: '#!',
      },
      {
        name: 'Frozen Appetizers',
        pathName: 'frozen-appetizers',
        path: '#!',
      },
    ],
  },
  {
    id: 'health-beauty',
    subheader: 'Health & Beauty',
    icon: 'icon-park-twotone:beauty',
    items: [
      {
        name: 'Vitamins',
        pathName: 'vitamins',
        path: '#!',
      },
      {
        name: 'Supplements',
        pathName: 'supplements',
        path: '#!',
      },
      {
        name: 'Skincare',
        pathName: 'skincare',
        path: '#!',
      },
      {
        name: 'Haircare',
        pathName: 'haircare',
        path: '#!',
      },
      {
        name: 'Oral Care',
        pathName: 'oral-care',
        path: '#!',
      },
      {
        name: 'Personal Care',
        pathName: 'personal-care',
        path: '#!',
      },
      {
        name: 'First Aid',
        pathName: 'first-aid',
        path: '#!',
      },
      {
        name: 'Medicines',
        pathName: 'medicines',
        path: '#!',
      },
      {
        name: 'Makeup',
        pathName: 'makeup',
        path: '#!',
      },
      {
        name: 'Fragrances',
        pathName: 'fragrances',
        path: '#!',
      },
    ],
  },
  {
    id: 'baby-products',
    subheader: 'Baby Products',
    icon: 'mdi:baby-buggy',
    items: [
      {
        name: 'Diapers',
        pathName: 'diapers',
        path: '#!',
      },
      {
        name: 'Baby Wipes',
        pathName: 'baby-wipes',
        path: '#!',
      },
      {
        name: 'Baby Food',
        pathName: 'baby-food',
        path: '#!',
      },
      {
        name: 'Baby Formula',
        pathName: 'baby-formula',
        path: '#!',
      },
      {
        name: 'Baby Skincare',
        pathName: 'baby-skincare',
        path: '#!',
      },
      {
        name: 'Baby Bath',
        pathName: 'baby-bath',
        path: '#!',
      },
      {
        name: 'Baby Toys',
        pathName: 'baby-toys',
        path: '#!',
      },
      {
        name: 'Baby Clothing',
        pathName: 'baby-clothing',
        path: '#!',
      },
      {
        name: 'Baby Accessories',
        pathName: 'baby-accessories',
        path: '#!',
      },
      {
        name: 'Baby Safety',
        pathName: 'baby-safety',
        path: '#!',
      },
    ],
  },
  {
    id: 'pet-supplies',
    subheader: 'Pet Supplies',
    icon: 'streamline:pet-paw',
    items: [
      {
        name: 'Dog Food',
        pathName: 'dog-food',
        path: '#!',
      },
      {
        name: 'Cat Food',
        pathName: 'cat-food',
        path: '#!',
      },
      {
        name: 'Bird Food',
        pathName: 'bird-food',
        path: '#!',
      },
      {
        name: 'Fish Food',
        pathName: 'fish-food',
        path: '#!',
      },
      {
        name: 'Dog Treats',
        pathName: 'dog-treats',
        path: '#!',
      },
      {
        name: 'Cat Treats',
        pathName: 'cat-treats',
        path: '#!',
      },
      {
        name: 'Pet Toys',
        pathName: 'pet-toys',
        path: '#!',
      },
      {
        name: 'Pet Beds',
        pathName: 'pet-beds',
        path: '#!',
      },
      {
        name: 'Pet Grooming',
        pathName: 'pet-grooming',
        path: '#!',
      },
      {
        name: 'Pet Health',
        pathName: 'pet-health',
        path: '#!',
      },
    ],
  },
  {
    id: 'household-items',
    subheader: 'Household Items',
    icon: 'ph:lightbulb-duotone',
    items: [
      {
        name: 'Batteries',
        pathName: 'batteries',
        path: '#!',
      },
      {
        name: 'Light Bulbs',
        pathName: 'light-bulbs',
        path: '#!',
      },
      {
        name: 'Plastic Wrap',
        pathName: 'plastic-wrap',
        path: '#!',
      },
      {
        name: 'Aluminum Foil',
        pathName: 'aluminum-foil',
        path: '#!',
      },
      {
        name: 'Storage Bags',
        pathName: 'storage-bags',
        path: '#!',
      },
      {
        name: 'Paper Plates',
        pathName: 'paper-plates',
        path: '#!',
      },
      {
        name: 'Plastic Utensils',
        pathName: 'plastic-utensils',
        path: '#!',
      },
      {
        name: 'Cleaning Supplies',
        pathName: 'cleaning-supplies',
        path: '#!',
      },
      {
        name: 'Laundry Detergent',
        pathName: 'laundry-detergent',
        path: '#!',
      },
      {
        name: 'Dish Soap',
        pathName: 'dish-soap',
        path: '#!',
      },
    ],
  },
];

export default sitemap;
