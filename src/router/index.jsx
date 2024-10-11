import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import { Home, Login, Register } from "../pages";
import { WithNavbar } from "./with-navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WithNavbar main={<Home />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
