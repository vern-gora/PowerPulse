import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import svg from '../../images/svg/sprite.svg';

function Header() {
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
          <button className={css.burger_menu_button}>
            <svg width={24} height={24}>
              <use href={svg + `#burger_menu_icon`}></use>
            </svg>
          </button>
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

