export interface Service {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Free Shipping",
    subtitle: "Free shipping on all your order",
    icon: "la:shipping-fast",
  },
  {
    id: 2,
    title: "Customer Support 24/7",
    subtitle: "Instant access to Support",
    icon: "iconoir:headset-help",
  },
  {
    id: 3,
    title: "100% Secure Payment",
    subtitle: "We ensure your money is save",
    icon: "bi:bag-check",
  },
  {
    id: 4,
    title: "Money-Back Guarantee",
    subtitle: "30 Days Money-Back Guarantee",
    icon: "iconoir:box-iso",
  },
];
