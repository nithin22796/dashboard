import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(() => import("../Layout"));
const Home = React.lazy(() => import("../pages/home"));
const Users = React.lazy(() => import("../pages/users"));
const Products = React.lazy(() => import("../pages/products"));
const Login = React.lazy(() => import("../pages/login"));
import React from "react";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default route;
