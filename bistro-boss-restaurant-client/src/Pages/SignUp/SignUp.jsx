import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "../../../src/assets/others/authentication2.png";
const SignUp = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  items-center justify-center py-20 bg-white">
        <div className="w-full lg:w-1/2">
          <img src={loginImg}></img>
        </div>

        <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 w-full lg:w-1/2">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm text-gray-400">
              Sign up to access your account
            </p>
          </div>
          <form
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              {/* <button
              disabled={disable}
              type="submit"
              className="bg-teal-500 w-full rounded-md py-3 text-white"
            >
              Login
            </button> */}
              <input
                className="w-full bg-teal-500 rounded-md text-center py-3 text-white"
                type="submit"
                value="Login"
              ></input>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Have an account yet?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-lime-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;