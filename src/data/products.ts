export interface ProductData {
  id: string | number;
  name: string;
  weight: number;
  unit: string;
  price: number;
  discountInPercent: number;
  rating: number;
  ratingCount: number;
  image: string;
  desc: string;
  category: string;
  subCategory: string;
  tags: string[];
  inStock: boolean;
  stockCount: number;
  sales: number;
  brandName: string;
  brandLink: string;
}

const sampleProducts: ProductData[] = [
  {
    id: 1,
    name: "Fresh Green Apple",
    weight: 1,
    unit: "kg",
    price: 14.99,
    discountInPercent: 20,
    rating: 4.8,
    ratingCount: 5200,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    desc: "Crisp, sweet, and juicy organic green apples.",
    category: "fruits",
    subCategory: "popular",
    tags: ["apple", "fruit", "organic"],
    inStock: true,
    stockCount: 850,
    sales: 42100,
    brandName: "FreshFarm",
    brandLink: "",
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    weight: 1,
    unit: "kg",
    price: 12.0,
    discountInPercent: 15,
    rating: 4.5,
    ratingCount: 3800,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    desc: "Farm fresh organic Chinese cabbage.",
    category: "vegetables",
    subCategory: "featured",
    tags: ["vegetable", "cabbage", "green"],
    inStock: true,
    stockCount: 1200,
    sales: 124032,
    brandName: "EcoGreens",
    brandLink: "",
  },
  {
    id: 3,
    name: "Fresh Orange",
    weight: 1,
    unit: "kg",
    price: 9.5,
    discountInPercent: 0,
    rating: 4.7,
    ratingCount: 4100,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
    desc: "Sun-ripened juicy citrus oranges rich in Vitamin C.",
    category: "fruits",
    subCategory: "hot deals",
    tags: ["orange", "fruit", "citrus"],
    inStock: true,
    stockCount: 650,
    sales: 38900,
    brandName: "CitrusGrove",
    brandLink: "",
  },
  {
    id: 4,
    name: "Organic Red Tomato",
    weight: 1,
    unit: "kg",
    price: 8.99,
    discountInPercent: 25,
    rating: 4.6,
    ratingCount: 6200,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    desc: "Plump, vine-ripened red organic tomatoes.",
    category: "vegetables",
    subCategory: "popular",
    tags: ["tomato", "organic", "vegetable"],
    inStock: true,
    stockCount: 1400,
    sales: 87200,
    brandName: "EcoGreens",
    brandLink: "",
  },
  {
    id: 5,
    name: "Fresh Broccoli Florets",
    weight: 1,
    unit: "kg",
    price: 11.5,
    discountInPercent: 10,
    rating: 4.4,
    ratingCount: 2900,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    desc: "Crisp and nutritious fresh organic broccoli.",
    category: "vegetables",
    subCategory: "featured",
    tags: ["broccoli", "green", "healthy"],
    inStock: true,
    stockCount: 920,
    sales: 51200,
    brandName: "FreshFarm",
    brandLink: "",
  },
  {
    id: 6,
    name: "Sweet Red Strawberries",
    weight: 500,
    unit: "g",
    price: 16.0,
    discountInPercent: 30,
    rating: 4.9,
    ratingCount: 7800,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    desc: "Handpicked premium sweet organic strawberries.",
    category: "fruits",
    subCategory: "hot deals",
    tags: ["strawberry", "berries", "fruit"],
    inStock: true,
    stockCount: 450,
    sales: 96400,
    brandName: "BerryBest",
    brandLink: "",
  },
  {
    id: 7,
    name: "Organic Sweet Corn",
    weight: 1,
    unit: "kg",
    price: 7.5,
    discountInPercent: 0,
    rating: 4.3,
    ratingCount: 2100,
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    desc: "Golden sweet corn freshly harvested.",
    category: "vegetables",
    subCategory: "popular",
    tags: ["corn", "organic", "vegetables"],
    inStock: true,
    stockCount: 800,
    sales: 34100,
    brandName: "FreshFarm",
    brandLink: "",
  },
  {
    id: 8,
    name: "Fresh Bell Peppers",
    weight: 1,
    unit: "kg",
    price: 13.0,
    discountInPercent: 15,
    rating: 4.6,
    ratingCount: 3500,
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    desc: "Crisp and colorful tri-color bell peppers.",
    category: "vegetables",
    subCategory: "featured",
    tags: ["peppers", "vegetable", "fresh"],
    inStock: true,
    stockCount: 680,
    sales: 47800,
    brandName: "EcoGreens",
    brandLink: "",
  },
  {
    id: 9,
    name: "Ripe Yellow Bananas",
    weight: 1,
    unit: "kg",
    price: 5.99,
    discountInPercent: 10,
    rating: 4.8,
    ratingCount: 8900,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    desc: "Naturally ripened, sweet and energy-packed bananas.",
    category: "fruits",
    subCategory: "popular",
    tags: ["banana", "fruit", "energy"],
    inStock: true,
    stockCount: 2100,
    sales: 150000,
    brandName: "TropiFruit",
    brandLink: "",
  },
  {
    id: 10,
    name: "Fresh Carrots Bunch",
    weight: 1,
    unit: "kg",
    price: 6.5,
    discountInPercent: 0,
    rating: 4.5,
    ratingCount: 3100,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    desc: "Crunchy sweet orange farm fresh carrots.",
    category: "vegetables",
    subCategory: "featured",
    tags: ["carrots", "vegetables", "healthy"],
    inStock: true,
    stockCount: 1300,
    sales: 68300,
    brandName: "FreshFarm",
    brandLink: "",
  },
  {
    id: 11,
    name: "Purple Eggplant",
    weight: 1,
    unit: "kg",
    price: 9.0,
    discountInPercent: 20,
    rating: 4.2,
    ratingCount: 1900,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Glossy and tender fresh organic eggplants.",
    category: "vegetables",
    subCategory: "hot deals",
    tags: ["eggplant", "vegetables", "organic"],
    inStock: true,
    stockCount: 540,
    sales: 29000,
    brandName: "EcoGreens",
    brandLink: "",
  },
  {
    id: 12,
    name: "Juicy Red Watermelon",
    weight: 3,
    unit: "kg",
    price: 18.5,
    discountInPercent: 15,
    rating: 4.9,
    ratingCount: 9400,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    desc: "Extra sweet and refreshing summer watermelon.",
    category: "fruits",
    subCategory: "popular",
    tags: ["watermelon", "fruit", "summer"],
    inStock: true,
    stockCount: 390,
    sales: 112000,
    brandName: "TropiFruit",
    brandLink: "",
  },
];

const products: ProductData[] = [...sampleProducts];

// Populate up to 24 items with repeated variations
while (products.length < 24) {
  const base = sampleProducts[products.length % sampleProducts.length];
  products.push({
    ...base,
    id: products.length + 1,
  });
}

export { products };
