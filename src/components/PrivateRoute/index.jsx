import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const { token } = useSelector((state) => ({
    token: state.auth.token,
  }));

  return token ? <Outlet /> : <Navigate to="/" />;
}
