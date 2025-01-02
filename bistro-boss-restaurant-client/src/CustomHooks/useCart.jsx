import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: cartsData, refetch } = useQuery({
    queryKey: ["userCart", user?.email],
    queryFn: async () => {
      const response = await axiosInstance.get(`/carts?email=${user?.email}`);
      return response.data;
    },
  });
  return [cartsData, refetch];
};

export default useCart;
