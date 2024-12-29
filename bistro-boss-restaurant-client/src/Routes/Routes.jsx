import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";

import MenuPage from "../Pages/MenuPage/MenuPage";

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
    ],
  },
]);

export default router;
