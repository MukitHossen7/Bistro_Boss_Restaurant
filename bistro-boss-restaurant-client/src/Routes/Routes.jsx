import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";

import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboards from "../Layouts/Dashboards";
import Revervation from "../Pages/Dashboard/Revervation/Revervation";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UserCart from "../Pages/Dashboard/UserCart/UserCart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <UserCart></UserCart>,
          </PrivateRoutes>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
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
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
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
