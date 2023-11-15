import Header from 'components/Header/Header';
import React from 'react';
import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <header className={css.header}>
        <Header />
      </header>
      <Outlet />
    </>
  );
}
export default Layout;
