import Header from 'components/Header/Header';
import React from 'react';
import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
function Layout() {
  const isLoggedIn = true;
  return (
    <>
      <header
        className={`${css.header} ${
          isLoggedIn ? css.isLoggedIn : css.isLoggedOut
        }`}
      >
        <Header />
      </header>
      <Outlet />
    </>
  );
}
export default Layout;
