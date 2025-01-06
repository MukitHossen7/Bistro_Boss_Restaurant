import Swal from "sweetalert2";
import useMenu from "../../../CustomHooks/useMenu";
import useAxiosInstance from "../../../CustomHooks/useAxiosInstance";
import { ScaleLoader } from "react-spinners";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosInstance = useAxiosInstance();
  const handleDelete = (id) => {
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
        const { data } = await axiosInstance.delete(`/menu/${id}`);
        console.log(data);
        if (data.deletedCount) {
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
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <ScaleLoader color="#0ceeb1" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center py-10">Manage Items</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-bold">{item.name}</span>
                </td>
                <td>{item.price}$</td>
                <th>
                  <button className="btn bg-teal-500 hover:bg-teal-400 btn-xs">
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-xs bg-red-600 hover:bg-red-500"
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

export default ManageItems;
