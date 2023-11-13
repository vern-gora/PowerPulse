import React from 'react';
import style from './SignInPage.module.css';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';
import SignInForm from 'components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <div className={style.container}>
      <SignInForm/>
      <StatisticInfo/>
    </div>
  )
}

export default SignInPage
