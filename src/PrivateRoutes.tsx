import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
interface Props {
  role: string[];
  allow: string;
}
const PrivateRoute: React.FC<Props> = ({ role, allow }) => {
  const authenticated = true;
  if (!authenticated) return null;
  if (!role.includes(allow)) {
    return <Navigate to='/unthorized' replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
