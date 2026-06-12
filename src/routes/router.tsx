import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router";
import MainLayout from "layouts/main-layout";
import Blog from "pages/blog";
import Error404 from "pages/Error404";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));
const Shop = lazy(() => import("pages/Shop"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const SignIn = lazy(() => import("pages/authentication/SignIn"));
const SignUp = lazy(() => import("pages/authentication/SignUp"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
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
            element: <Shop />,
          },
          {
            path: "blog",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Blog />,
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
