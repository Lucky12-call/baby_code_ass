import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function AuthGuard({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
