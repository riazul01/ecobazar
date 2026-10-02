import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router";
import PageLoader from "components/loader/PageLoader";
import Splash from "components/loader/Splash";
import Error404 from "pages/Error404";
import AccountLayout from "layouts/account-layout";
import Dashboard from "pages/account/Dashboard";
import { accountPaths, paths } from "./paths";
import OrderHistory from "pages/account/OrderHistory";
import OrderDetails from "pages/account/OrderDetails";
import Settings from "pages/account/Settings";
import ProductDetails from "pages/ProductDetails";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));
const Shop = lazy(() => import("pages/Shop"));
const Cart = lazy(() => import("pages/Cart"));
const Wishlist = lazy(() => import("pages/Wishlist"));
const Blog = lazy(() => import("pages/Blog"));
const BlogDetails = lazy(() => import("pages/BlogDetails"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const SignIn = lazy(() => import("pages/authentication/SignIn"));
const SignUp = lazy(() => import("pages/authentication/SignUp"));
const MainLayout = lazy(() => import("layouts/main-layout"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "shop",
            children: [
              {
                index: true,
                element: <Shop />,
              },
              {
                path: "product-details/:id",
                element: <ProductDetails />,
              },
              {
                path: "product-details",
                element: <ProductDetails />,
              },
            ],
          },
          {
            path: "product-details/:id",
            element: <ProductDetails />,
          },
          {
            path: "product-details",
            element: <ProductDetails />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "blog",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Blog />,
              },
              {
                path: ":id",
                element: <BlogDetails />,
              },
            ],
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "auth",
            element: <Outlet />,
            children: [
              {
                path: "signin",
                element: <SignIn />,
              },
              {
                path: "signup",
                element: <SignUp />,
              },
            ],
          },
          {
            path: paths.account,
            element: (
              <AccountLayout>
                <Outlet />
              </AccountLayout>
            ),
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                path: accountPaths.dashboard,
                element: <Dashboard />,
              },
              {
                path: accountPaths.orderHistory,
                element: <OrderHistory />,
              },
              {
                path: accountPaths.orderDetails,
                element: <OrderDetails />,
              },
              {
                path: accountPaths.settings,
                element: <Settings />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
