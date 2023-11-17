import { useDispatch } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import { logOut } from 'redux/auth/operations';
import css from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <button onClick={handleLogOut} className={css.log_out_link}>
      Logout
      <svg width="20" height="20">
        <use href={`${sprite}#log_out_icon`}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
