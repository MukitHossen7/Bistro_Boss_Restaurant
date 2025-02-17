import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../src/assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  console.log("from user", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const user = await signInUser(email, password);
      if (user) {
        toast.success("Signup Successfully");
        e.target.reset();
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleGoogleLogin = async () => {
    const { user } = await googleLogin();
    console.log(user);
    const userData = {
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
    };
    console.log(userData);
    try {
      const { data: user } = await axiosPublic.post(`/users`, userData);
      console.log(user);
      toast.success("Google Signin Successfully");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Login | BISTRO BOSS</title>
      </Helmet>
      <Link to="/">
        <button className="btn bg-teal-600 hover:bg-teal-400">
          Back to Home
        </button>
      </Link>
      <div className="flex flex-col lg:flex-row  items-center justify-center py-20 bg-white">
        <div className="w-full lg:w-1/2">
          <img src={loginImg}></img>
        </div>

        <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 w-full lg:w-1/2">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleLoginForm}
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

              <div>
                <div className="flex justify-between">
                  <LoadCanvasTemplate />
                </div>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  autoComplete="current-password"
                  required
                  placeholder="Fill up this captcha"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900 mt-2"
                />
                <button
                  onClick={handleCaptcha}
                  type="button"
                  className="btn btn-xs bg-teal-500 w-full hover:bg-teal-500"
                >
                  Validate
                </button>
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
                disabled={false}
                className={`w-full rounded-md text-center py-3 text-white ${
                  disabled ? "bg-red-500" : " bg-teal-500 "
                }`}
                type="submit"
                value="Login"
              ></input>
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-lime-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <button onClick={handleGoogleLogin}>
            <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
          </button>
          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-lime-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
