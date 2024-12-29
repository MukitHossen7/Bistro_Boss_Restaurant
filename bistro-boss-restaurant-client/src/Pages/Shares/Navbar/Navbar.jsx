import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto sticky top-0 z-40">
      <div className="navbar bg-white  pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              <NavLink>HOME</NavLink>
              <NavLink>CONTACT US</NavLink>
              <NavLink>DASHBOARD</NavLink>
              <NavLink>OUR MENU</NavLink>
              <NavLink>OUR SHOP</NavLink>
            </ul>
          </div>
          <h2 className="text-lg lg:text-2xl font-medium">BISTRO BOSS</h2>
        </div>

        <div className="navbar-end gap-7">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-7 font-medium">
              <NavLink to="/">HOME</NavLink>
              <NavLink>CONTACT US</NavLink>
              <NavLink>DASHBOARD</NavLink>
              <NavLink to="/menu">OUR MENU</NavLink>
              <NavLink>OUR SHOP</NavLink>
            </ul>
          </div>

          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
