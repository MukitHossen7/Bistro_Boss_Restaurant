import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../src/assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { imageUpload } from "../../Api/utils";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
const SignUp = () => {
  const { createNewUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const image = data.photo[0];
    const imageURL = await imageUpload(image);
    console.log(imageURL);
    const result = await createNewUser(data.email, data.password);
    await updateUserProfile({ displayName: data.name, photoURL: imageURL });
    console.log(result);
    try {
      if (result) {
        reset();
        toast.success("Signup Successfully");
        navigate("/");
      }
      const userData = {
        email: data.email,
        displayName: data.name,
        photoURL: imageURL,
      };
      const { data: userInfo } = await axiosPublic.post(`/users`, userData);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleSignUp = async () => {
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
      toast.success("Google Signup Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Signup | BISTRO BOSS</title>
      </Helmet>
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
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    Name is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Image URL
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  placeholder="Enter Your photo url Here"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    Photo is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    Email is required
                  </span>
                )}
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/,
                      message:
                        "Password must one Uppercase Lowercase & Special character",
                    },
                  })}
                  autoComplete="current-password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
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
                value="Signup"
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
          <button onClick={handleGoogleSignUp}>
            <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
          </button>
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
