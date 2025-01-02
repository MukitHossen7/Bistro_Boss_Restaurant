import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../CustomHooks/useCart";

const Navbar = () => {
  const [cartsData] = useCart();
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser().then(() => {
      toast.success("Logout Successfully");
    });
  };
  return (
    <div className="sticky top-0 z-40 bg-white backdrop:blur-sm ">
      <div className="">
        <div className=" navbar pt-4 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <div className="navbar-center hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1">
                <BsCart4 />
                <div className="badge badge-secondary">
                  +{cartsData?.length}
                </div>
              </div>
              <ul className="menu menu-horizontal px-1 gap-7 font-medium">
                <NavLink to="/">HOME</NavLink>
                <NavLink>CONTACT US</NavLink>
                <NavLink>DASHBOARD</NavLink>
                <NavLink to="/menu">OUR MENU</NavLink>
                <NavLink to="/shop">OUR SHOP</NavLink>
              </ul>
            </div>

            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user?.photoURL}
                  className="w-8 h-8 object-cover ring ring-teal-500 rounded-full"
                ></img>
                <button
                  onClick={handleLogOut}
                  className="btn bg-teal-600 hover:bg-teal-500 text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-teal-600 hover:bg-teal-500 text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
