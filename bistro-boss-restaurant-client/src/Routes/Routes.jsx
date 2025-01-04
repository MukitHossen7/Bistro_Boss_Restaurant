import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";

import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboards from "../Layouts/Dashboards";
import UserCart from "./../Pages/Dashboard/UserCart/UserCart";
import Revervation from "../Pages/Dashboard/Revervation/Revervation";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
        element: (
          <PrivateRoutes>
            <MenuPage></MenuPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboards></Dashboards>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userCart",
        element: <UserCart></UserCart>,
      },
      {
        path: "reservation",
        element: <Revervation></Revervation>,
      },
      //Admin routes
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
