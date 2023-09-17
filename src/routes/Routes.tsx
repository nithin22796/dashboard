import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home";
import Users from "../pages/users";
import Products from "../pages/products";
import Login from "../pages/login";

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
