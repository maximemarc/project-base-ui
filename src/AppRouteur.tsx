import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Accueil from "./page/Accueil";
import ErrorPage from "./page/ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Accueil />,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={router} />;
}
