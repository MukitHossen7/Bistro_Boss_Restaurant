import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../CustomHooks/useAxiosInstance";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
  const axiosInstance = useAxiosInstance();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users`);
      return data;
    },
  });
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
        const { data } = await axiosInstance.delete(`/user/${id}`);
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
  const handleCreateAdmin = async (id) => {
    console.log(id);
    const { data } = await axiosInstance.patch(`/user/admin/${id}`);
    console.log(data);
    refetch();
  };
  return (
    <div>
      <h2 className="font-bold text-3xl">Total Users: {users.length}</h2>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="bg-sky-500 p-2 rounded-full hover:cursor-not-allowed">
                        <MdOutlineAdminPanelSettings />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCreateAdmin(user._id)}
                        className="bg-teal-400 p-2 rounded-full"
                      >
                        <FaUser className=""></FaUser>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-red-500 hover:bg-red-500 text-white text-xs"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
