interface FooterLink {
  id: number;
  title: string;
  link: string;
}

interface FooterSection {
  id: number | string;
  subheader: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    id: 1,
    subheader: "My Account",
    links: [
      {
        id: 1,
        title: "My Account",
        link: "#!",
      },
      {
        id: 2,
        title: "Order History",
        link: "#!",
      },
      {
        id: 3,
        title: "Shoping Cart",
        link: "#!",
      },
      {
        id: 4,
        title: "Wishlist",
        link: "#!",
      },
    ],
  },
  {
    id: 2,
    subheader: "Categories",
    links: [
      {
        id: 1,
        title: "Fruit & Vegetables",
        link: "#!",
      },
      {
        id: 2,
        title: "Meat & Fish",
        link: "#!",
      },
      {
        id: 3,
        title: "Bread & Bakery",
        link: "#!",
      },
      {
        id: 4,
        title: "Beauty & Health",
        link: "#!",
      },
    ],
  },
  {
    id: 3,
    subheader: "Quick Links",
    links: [
      {
        id: 1,
        title: "About Us",
        link: "#!",
      },
      {
        id: 2,
        title: "Latest Blogs",
        link: "#!",
      },
      {
        id: 3,
        title: "New Offers",
        link: "#!",
      },
      {
        id: 4,
        title: "FAQs",
        link: "#!",
      },
    ],
  },
  {
    id: 4,
    subheader: "Helps",
    links: [
      {
        id: 1,
        title: "Contact",
        link: "#!",
      },
      {
        id: 2,
        title: "Refund Policies",
        link: "#!",
      },
      {
        id: 3,
        title: "Terms & Condition",
        link: "#!",
      },
      {
        id: 4,
        title: "Privacy Policy",
        link: "#!",
      },
    ],
  },
];
