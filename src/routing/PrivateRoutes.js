import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const user = true;
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
