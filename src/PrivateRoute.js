import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogined = useSelector(state => state.info.auth.isLoggedIn);
  const shouldRedirect = !isLogined;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
