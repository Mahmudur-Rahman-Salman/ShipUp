import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  
  if (loading) return <Loader></Loader>;
  if (!user) return <Navigate to="/signup" replace />;

  return children;
};

export default PrivateRoutes;
