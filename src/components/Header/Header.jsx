import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import svg from '../../images/svg/sprite.svg';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Очистка слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLoggedIn = true;

  return (
    <div className={`${css.header} `}>
      <NavLink to="/" className={css.header_logo}>
        <svg className={css.icon_logo}>
          <use href={svg + `#logo_icon`}></use>
        </svg>
        <svg className={css.icon_text}>
          <use href={svg + `#logo_text`}></use>
        </svg>
      </NavLink>
      {isLoggedIn && (
        <div className={css.ctrl_container}>
          <button className={css.settings_button}>
            <svg width={24} height={24}>
              <use href={svg + `#settings_icon`}></use>
            </svg>
          </button>
          <div className={css.avatar_icon}>
            <svg width={21} height={21}>
              <use href={svg + `#avatar_icon`}></use>
            </svg>
          </div>
          {windowWidth < 1440 && (
            <button className={css.burger_menu_button}>
              <svg width={24} height={24}>
                <use href={svg + `#burger_menu_icon`}></use>
              </svg>
            </button>
          )}
          {windowWidth >= 1440 && (
            // <button className={css.logout_button}>
            //   Logout
            //   <svg width={20} height={20}>
            //     <use href={svg + `#log_out_icon`}></use>
            //   </svg>
            // </button>
            <LogoutBtn />
          )}
        </div>
      )}
    </div>
  );
}
export default Header;

/* <div className={css.ctrl_container}>
  <button className={css.settings_button}>
    <svg width={24} height={24}>
      <use href={svg + `#settings_icon`}></use>
    </svg>
  </button>
  <div className={css.avatar_icon}>
    <svg width={21} height={21}>
      <use href={svg + `#avatar_icon`}></use>
    </svg>
  </div>
  <button className={css.burger_menu_button}>
    <svg width={24} height={24}>
      <use href={svg + `#burger_menu_icon`}></use>
    </svg>
  </button>
</div>; */
