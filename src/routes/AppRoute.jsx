import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";

const router = createBrowserRouter([
  { path: "*", element: <>404 Not Found</> },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

function AppRoute() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppRoute;
