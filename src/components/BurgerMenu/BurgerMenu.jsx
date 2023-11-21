import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
import css from './BurgerMenu.module.css';
import sprite from '../../images/svg/sprite.svg';
import { Link } from 'react-router-dom';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';


// const BurgerMenuRoot = document.querySelector('#modal-root');

function BurgerMenu({ toggleMenu }) {
  // const overlayRef = React.useRef();

  const onKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  // const overlayClick = useCallback(
  //   e => {
  //     if (e.target === overlayRef.current) {
  //       toggleMenu();
  //     }
  //   },
  //   [toggleMenu]
  // );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      BurgerMenu();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.burgerMenu}>
        <svg className={css.closeIcon} onClick={() => toggleMenu()}>
          <use href={sprite + '#close_icon'}></use>
        </svg>
        <nav>
          <ul className={css.navList}>
            <li>
              <Link onClick={() => toggleMenu()} to='/diary'>
                <button className={css.btn} styled='transparent'>Diary</button>
              </Link>
            </li>
            <li>
              <Link onClick={() => toggleMenu()} to='/products'>
                <button className={css.btn} styled='transparent'>Products</button>
              </Link>
            </li>
            <li>
              <Link onClick={() => toggleMenu()} to='/exercises'>
                <button className={css.btn} styled='transparent'>Exercises</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.logoutBtn}>
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;
