import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../utils/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }): any => {
  const { error, isLoading } = useUser();

  if (isLoading) return <p>Loading content...</p>;

  return error ? <Navigate to="/auth/login" replace={true} /> : children;
};

export default ProtectedRoute;
