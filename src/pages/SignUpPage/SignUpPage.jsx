import React from 'react';
import style from './SignUpPage.module.css';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';

const SignUpPage = () => {
  return (
    <div className={style.container}>
      <SignUpForm/>
      <StatisticInfo/>
    </div>
  )
}
export default SignUpPage
