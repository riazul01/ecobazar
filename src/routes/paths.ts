export const paths = {
  home: "/",
  shop: "/shop",
  productDetails: (id: string | number = ":id") =>
    `/shop/product-details/${id}`,
  cart: "/cart",
  checkout: "/checkout",
  wishlist: "/wishlist",
  about: "/about",
  blog: "/blog",
  blogDetails: (id: string | number = ":id") => `/blog/${id}`,
  contact: "/contact",
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  account: "/account",
  adminProductUpload: "/admin/product-upload",
  adminCreateBlog: "/admin/create-blog",
  faq: "/faq",
};

export const accountPaths = {
  dashboard: `${paths.account}/dashboard`,
  orderHistory: `${paths.account}/order-history`,
  orderDetails: `${paths.account}/order-history/:id`,
  settings: `${paths.account}/settings`,
};
