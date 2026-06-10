import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router";

import MainLayout from "layouts/main-layout";
import Blog from "pages/blog";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));
const Shop = lazy(() => import("pages/Shop"));

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
        ],
      },
      {
        path: "*",
        element: <h1>Error 404 | Page not found!!</h1>,
      },
    ],
  },
]);

export default router;
