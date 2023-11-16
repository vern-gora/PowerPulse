import { useDispatch } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import css from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div onClick={handleLogOut} className={css.log_out_link}>
      <span className={css.btn}>
        <svg width="24" height="24">
          <use href={`${sprite}#log_out_icon`}></use>
        </svg>
      </span>
    </div>
  );
};

export default LogoutBtn;
