import React from 'react';
import style from './SignUpPage.module.css';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';
import { useSelector } from 'react-redux';
import { Rings } from 'react-loader-spinner';

const SignUpPage = () => {
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
    />):(<div className={style.container}>
      <SignUpForm/>
      <StatisticInfo/>
    </div>)}
    </>
  )
}
export default SignUpPage
