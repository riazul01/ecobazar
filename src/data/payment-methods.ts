import { visa, mastercard, discover, applepay, cart } from "data/images";

export interface PaymentMethod {
  id: number | string;
  image: string;
  link: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    image: visa,
    link: "#!",
  },
  {
    id: 2,
    image: mastercard,
    link: "#!",
  },
  {
    id: 3,
    image: discover,
    link: "#!",
  },
  {
    id: 4,
    image: applepay,
    link: "#!",
  },
  {
    id: 5,
    image: cart,
    link: "#!",
  },
];
