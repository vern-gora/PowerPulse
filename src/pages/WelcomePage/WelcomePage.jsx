import React from 'react';
import css from './welcomePage.module.css';
import bimg from '../../images/desktop_images/hero-desktop.jpg';
import line from '../../images/svg/Line.svg';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const navigate = useNavigate();

    const linkSignIn = () => {
        navigate('/signin');
    };
    const linkSignUp = () => {
        navigate('/signup');
    };

  return (
    <div className={css.home_container}>
      <div className={css.wrapper}>
      <img src={line} alt="Line" className={css.line}/>;
        <h1 className={css.title}>Transforming your body shape with Power Pulse</h1>
        <nav className={css.nav}>
            <button type='button' className={css.btn} onClick={linkSignUp}>Sign Up</button>
            <button type='button' className={css.btn} onClick={linkSignIn}>Sign In</button>
        </nav>
      </div>
      <img src={bimg} alt="Logo" className={css.img}/>;
    </div>
  )
}

export default WelcomePage;