import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAdmin from "../../CustomHooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div>
      <hr />
      <div className="z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ">
        <div>
          <h2 className="font-semibold">Admin Control</h2>
          {/* Nav Items */}
          {isAdmin ? (
            <div className="flex gap-3 flex-col justify-between flex-1 mt-6">
              <Link to="reservation">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Admin Home
                  </div>
                </nav>
              </Link>
              <Link to="addItems">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Add Items
                  </div>
                </nav>
              </Link>
              <Link to="manageItems">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Manage Items
                  </div>
                </nav>
              </Link>
              <nav>
                <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                  Manage Bookings
                </div>
              </nav>
              <Link to="allUsers">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    All Users
                  </div>
                </nav>
              </Link>
            </div>
          ) : (
            <div className="flex gap-3 flex-col justify-between flex-1 mt-6">
              <Link to="reservation">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Admin Home
                  </div>
                </nav>
              </Link>
              <Link to="/addItems">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Add Items
                  </div>
                </nav>
              </Link>
              <Link to="userCart">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    Manage Items
                  </div>
                </nav>
              </Link>
              <nav>
                <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                  Manage Bookings
                </div>
              </nav>
              <Link to="allUsers">
                <nav>
                  <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                    All Users
                  </div>
                </nav>
              </Link>
            </div>
          )}
          <hr></hr>
          <div className="flex flex-col gap-2 mt-6">
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
              <Link to="/">
                <h2 className="text-2xl font-semibold">Home</h2>
              </Link>
            </div>
            <div className="w-full hidden md:flex px-4 py-2  rounded-lg  items-center bg-teal-300 mx-auto">
              <Link to="/shop">
                <h2 className=" font-semibold"> Shop</h2>
              </Link>
            </div>
            <div className="w-full hidden md:flex px-4 py-2  rounded-lg  items-center bg-teal-300 mx-auto">
              <Link to="/menu">
                <h2 className=" font-semibold"> Menu</h2>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <hr />

          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
