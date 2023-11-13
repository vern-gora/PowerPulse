import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
function Header() {
  return (
    <>
      <p className={css.header}>headerstyle tetst</p>
      <NavLink to="/"></NavLink>
    </>
  );
}
export default Header;
