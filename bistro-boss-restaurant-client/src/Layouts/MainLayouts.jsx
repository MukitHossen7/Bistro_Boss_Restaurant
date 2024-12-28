import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shares/Navbar/Navbar";
import Footer from "../Pages/Shares/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-325px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
