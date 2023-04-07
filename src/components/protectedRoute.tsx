import jwtDecode from "jwt-decode";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../store/authStore";

interface JWTPayload {
  username: string;
  userId: string;
  role: string;
  iat: number;
  exp: number;
}

const validateToken = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    const isExpired: boolean = decoded.exp < Date.now() / 1000;
    const isPayloadExist: boolean =
      decoded.username !== undefined &&
      decoded.role !== undefined &&
      decoded.userId !== undefined;

    return !isExpired && isPayloadExist;
  } catch (error) {
    return false;
  }
};

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }): any => {
  const accessToken = useAuth((state) => state.accessToken);

  if (!accessToken) return <Navigate to="/auth/login" replace={true} />;

  return validateToken(accessToken) ? (
    children
  ) : (
    <Navigate to="/auth/login" replace={true} />
  );
};

export default ProtectedRoute;
