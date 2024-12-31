import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";

import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import Login from "../Pages/Login/Login";
import AuthLayouts from "../Layouts/AuthLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
