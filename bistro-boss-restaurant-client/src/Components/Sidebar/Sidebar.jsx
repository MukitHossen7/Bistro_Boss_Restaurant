import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <div>
                <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
                  <Link to="/">
                    <h2 className="text-2xl font-semibold">BISTRO BOSS</h2>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200">
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div> */}
      <div className="z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ">
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
              <Link to="/">
                <h2 className="text-2xl font-semibold">BISTRO BOSS</h2>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex gap-3 flex-col justify-between flex-1 mt-6">
            <Link to="reservation">
              <nav>
                <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                  Reservation
                </div>
              </nav>
            </Link>
            <Link to="userCart">
              <nav>
                <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                  My Cart
                </div>
              </nav>
            </Link>
            <nav>
              <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                Add a review
              </div>
            </nav>
            <nav>
              <div className="bg-green-400 text-white font-semibold py-2 px-4 ">
                My Booking
              </div>
            </nav>
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
