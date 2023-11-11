import React from 'react';
import css from './welcomePage.module.css';
import line from '../../images/svg/Line.svg';
import { NavLink } from 'react-router-dom';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';

const WelcomePage = () => {

  return (
    <div className={css.home_container}>
      <div className={css.wrapper}>
        <div className={css.item}>
          <img src={line} alt="Line" className={css.line}/>
          <h1 className={css.title}>Transforming your body shape with Power Pulse</h1>
        </div>
        <nav className={css.nav}>
            <NavLink to='/signup' className={css.btn}>Sign Up</NavLink>
            <NavLink to='/signin' className={css.btn}>Sign In</NavLink>
        </nav>
      </div>
      <StatisticInfo/>
    </div>
  )
}

export default WelcomePage;