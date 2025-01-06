import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ScaleLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../CustomHooks/useAdmin";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminPending] = useAdmin();
  if (loading || isAdminPending)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <ScaleLoader color="#0ceeb1" />
      </div>
    );
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
