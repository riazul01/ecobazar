import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router";

import MainLayout from "layouts/main-layout";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));

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
