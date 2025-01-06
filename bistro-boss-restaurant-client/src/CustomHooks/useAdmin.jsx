import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/user/admin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminPending];
};

export default useAdmin;
