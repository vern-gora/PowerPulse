import { useSelector } from 'react-redux';
import {
  selectGoToParams,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isUser = useSelector(selectUser);
  const isParams = useSelector(selectGoToParams);

  return {
    isLoggedIn,
    isRefreshing,
    isUser,
    isParams,
  };
};
