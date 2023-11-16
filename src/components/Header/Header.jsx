import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import svg from '../../images/svg/sprite.svg';

function Header() {
  // const isLoggedIn = true;

  return (
    <div className={`${css.header_home_link} container`}>
      <NavLink to="/" className={css.header_logo}>
        <svg className={css.icon_logo}>
          <use href={svg + `#logo_icon`}></use>
        </svg>
        <svg className={css.icon_text}>
          <use href={svg + `#logo_text`}></use>
        </svg>
      </NavLink>
      <svg className={css.avatar_icon}>
        <use href={svg + `#avatar_icon`}></use>
      </svg>
    </div>
  );
}
export default Header;
