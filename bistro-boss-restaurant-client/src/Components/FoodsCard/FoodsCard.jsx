import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosInstance from "../../CustomHooks/useAxiosInstance";
import toast from "react-hot-toast";
import useCart from "../../CustomHooks/useCart";

// import useAxiosInstance from "../../CustomHooks/useAxiosInstance";

/* eslint-disable react/prop-types */
const FoodsCard = ({ food }) => {
  const { image, name, recipe, price } = food;
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = async (item) => {
    const { image, name, recipe, price, _id } = item;
    if (user?.email) {
      const cartData = {
        foodId: _id,
        email: user?.email,
        image,
        name,
        recipe,
        price,
      };
      const { data } = await axiosInstance.post("/carts", cartData);
      console.log(data);
      if (data.insertedId) {
        toast.success("Add Cart Successfully");
      }
    } else {
      Swal.fire({
        title: "Please Sign In to Add to Cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    refetch();
  };
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="relative">
          <img src={image} className="object-cover w-full h-64" alt="" />
          <p className="absolute top-4 right-5 bg-black/90 text-white px-4 py-1 rounded-sm">
            $ {price}
          </p>
        </div>
        <div className="p-5 border border-t-0 text-center bg-gray-100">
          <h3 className="inline-block mb-1 text-xl lg:text-2xl font-semibold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
            {name}
          </h3>
          <p className="mb-6 text-gray-700">{recipe.slice(0, 40)}....</p>
          <button
            onClick={() => handleAddToCart(food)}
            className="inline-flex uppercase items-center font-medium text-base lg:text-lg text-[#BB8506] transition-colors duration-200 border-b-2 border-[#BB8506] px-5 rounded-lg py-2 bg-gray-200 hover:bg-[#1F2937] hover:border-b-0 hover:py-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
