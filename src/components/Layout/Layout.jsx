import Header from 'components/Header/Header';
import React from 'react';
import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
function Layout() {
  const { isLoggedIn } = useAuth();
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
