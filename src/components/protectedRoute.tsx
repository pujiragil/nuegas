import jwtDecode from "jwt-decode";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../store/authStore";

interface JWTPayload {
  username: string;
  id: string;
  role: string;
  iat: number;
  exp: number;
}

const validateToken = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    const currentTime = Date.now() / 1000;
    return (
      decoded.username !== undefined &&
      decoded.role !== undefined &&
      decoded.id !== undefined &&
      decoded.exp >= currentTime
    );
  } catch (error) {
    return false;
  }
};

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useAuth((state) => state.accessToken);
  if (!accessToken) return <Navigate to="/auth/login" replace={true} />;
  return validateToken(accessToken) ? (
    children
  ) : (
    <Navigate to="/auth/login" replace={true} />
  );
};

export default ProtectedRoute;
