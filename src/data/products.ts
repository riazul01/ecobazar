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

const product: ProductData = {
  id: 1,
  name: "Chinese cabbage",
  weight: 1,
  unit: "kg",
  price: 60,
  discountInPercent: 10,
  rating: 4.2,
  ratingCount: 5000,
  image:
    "https://images.pexels.com/photos/35974369/pexels-photo-35974369/free-photo-of-fresh-organic-vegetables-and-fruits-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "",
  category: "vegetables",
  subCategory: "featured",
  tags: ["vegetable", "green", "organic"],
  inStock: true,
  stockCount: 1200,
  sales: 124032,
  brandName: "freshfirm",
  brandLink: "",
};

const products: ProductData[] = [];

for (let i = 0; i <= 24; i++) {
  products.push(product);
}

export { products };
