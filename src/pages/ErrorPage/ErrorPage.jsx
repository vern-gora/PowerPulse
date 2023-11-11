import React from 'react'
import style from './ErrorPage.module.css'
import bimg from '../../images/desktop_images/hero-desktop.png';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={style.container}>
      <div className={style.errorContainer}>
        <h2 className={style.title}>404</h2>
        <p className={style.description}>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</p>
        <button className={style.btn}>
          <NavLink to={'/'}>Go Home</NavLink>
        </button>
      </div>
      <img src={bimg} alt="Logo" className={style.img}/>;
    </div>
  )
}

export default ErrorPage
