import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../CustomHooks/useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const PaymentHistory = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: paymentsData = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/save-payment/${user?.email}`);
      return data;
    },
  });
  console.log(paymentsData);
  return (
    <div>
      <h3 className="font-semibold text-3xl">
        Payment Total History {paymentsData?.length}
      </h3>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO:</th>
              <th>PRICE</th>
              <th>TRANSACTION ID</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.price}</td>
                <td>{payment.paymentId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
