import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shares/Navbar/Navbar";
import Footer from "../Pages/Shares/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
