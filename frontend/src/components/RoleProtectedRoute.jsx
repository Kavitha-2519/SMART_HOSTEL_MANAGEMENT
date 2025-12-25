import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (user.role !== role) return <Navigate to="/" />;

  return children;
};

export default RoleProtectedRoute;
