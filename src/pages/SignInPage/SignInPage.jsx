import React from 'react';
import style from './SignInPage.module.css';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';
import SignInForm from 'components/SignInForm/SignInForm';
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const SignInPage = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <>
      {isLoading ? (<Rings
      height="100"
      width="100"
      color="#e6533c"
      ariaLabel="rings-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />):(
      <div className={style.container}>
        <SignInForm/>
        <StatisticInfo/>
      </div>)}
    </>
  )
}

export default SignInPage
