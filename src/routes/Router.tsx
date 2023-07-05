import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage.tsx";
import { ErrorPage } from "./ErrorPage.tsx";
import { SignUpPage } from "./auth/SignUpPage.tsx";
import { SignInPage } from "./auth/SignInPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/signup",
    element: <SignUpPage />,
  },
  {
    path: "/auth/signin",
    element: <SignInPage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
