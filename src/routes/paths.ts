export const paths = {
  home: "/",
  shop: "/shop",
  productDetails: "/products/details",
  wishlist: "/wishlist",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  account: "/account",
  faq: "/faq",
};

export const accountPaths = {
  dashboard: `${paths.account}/dashboard`,
  orderHistory: `${paths.account}/order-history`,
  orderDetails: `${paths.account}/order-history/:id`,
  settings: `${paths.account}/settings`,
};
