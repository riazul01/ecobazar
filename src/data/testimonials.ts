import User1 from "assets/profiles/user1.webp";
import User2 from "assets/profiles/user2.webp";
import User3 from "assets/profiles/user3.webp";
import User4 from "assets/profiles/user4.webp";
import User5 from "assets/profiles/user5.webp";
import User6 from "assets/profiles/user6.webp";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Robert Fox",
    role: "Customer",
    avatar: User1,
    rating: 5,
    message:
      "The quality of the products was excellent and felt premium from the start. Delivery was smooth, and everything arrived exactly as expected.",
  },
  {
    id: "2",
    name: "Dianne Russell",
    role: "Customer",
    avatar: User2,
    rating: 5,
    message:
      "Customer support was incredibly helpful and responsive. They guided me through the purchase and made it effortless.",
  },
  {
    id: "3",
    name: "Eleanor Pena",
    role: "Customer",
    avatar: User3,
    rating: 5,
    message:
      "I love how easy the website is to use. Everything is well organized, and I found exactly what I needed within minutes. Highly recommended!",
  },
  {
    id: "4",
    name: "Albert Flores",
    role: "Customer",
    avatar: User4,
    rating: 4,
    message:
      "Great overall experience. The product quality is solid, though I’d love to see a bit more variety in the catalog. Still, very satisfied with my purchase.",
  },
  {
    id: "5",
    name: "Kristin Watson",
    role: "Customer",
    avatar: User5,
    rating: 5,
    message:
      "Fast delivery and excellent service! The attention to detail really stands out. It feels like the brand genuinely cares about its customers.",
  },
  {
    id: "6",
    name: "Cameron Williamson",
    role: "Customer",
    avatar: User6,
    rating: 5,
    message:
      "This is my third time ordering, and the experience has been consistently great. Reliable service and top-notch quality every time.",
  },
];
