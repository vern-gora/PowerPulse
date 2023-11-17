import { useDispatch } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import css from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Link to="/" onClick={handleLogOut} className={css.log_out_link}>
      <span className={css.btn}>
        <label className={css.icon_wrap}>Logout&nbsp;
          <svg className={css.icon}>
            <use href={`${sprite}#log_out_icon`}></use>
          </svg>
        </label>
      </span>
    </Link>
  );
};

export default LogoutBtn;
