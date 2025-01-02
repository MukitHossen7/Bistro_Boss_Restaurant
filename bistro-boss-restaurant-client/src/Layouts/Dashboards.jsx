import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Dashboards = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">
      <Sidebar></Sidebar>
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
