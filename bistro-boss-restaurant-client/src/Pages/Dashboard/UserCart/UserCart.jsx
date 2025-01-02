import Swal from "sweetalert2";
import useCart from "../../../CustomHooks/useCart";
import useAxiosInstance from "../../../CustomHooks/useAxiosInstance";

const UserCart = () => {
  const axiosInstance = useAxiosInstance();
  const [cartsData, refetch] = useCart();
  const totalPrice = cartsData?.reduce((pre, cur) => pre + cur?.price, 0);
  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosInstance.delete(`/carts/${id}`);

        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="pt-10">
      <div className="flex flex-row justify-between bg-gray-100 px-3 py-2 rounded-md">
        <h2 className="font-semibold text-3xl">Items: {cartsData?.length}</h2>
        <h2 className="font-semibold text-3xl">Total Price: {totalPrice}</h2>
        <button className="btn bg-teal-300 hover:bg-teal-400">Pay</button>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartsData?.map((food, idx) => (
              <tr key={food._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={food?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-medium">{food?.name}</p>
                </td>
                <td>{food?.price}$</td>
                <th>
                  <button
                    onClick={() => handleDeleteCart(food._id)}
                    className="btn bg-red-500 hover:bg-red-500 text-white btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCart;
