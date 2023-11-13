import React from 'react';
import style from './SignInPage.module.css';
import StatisticInfo from 'components/StatisticsInfo/StatisticsInfo';
import SignInForm from 'components/SignInForm/SignInForm';
// import { useDispatch } from 'react-redux';
// import { loginUser } from 'redux/auth/api';

const SignInPage = () => {

//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {

//     event.preventDefault();

//     const email = event.currentTarget.elements.userEmail.value;
//     const password = event.currentTarget.elements.userPassword.value;

//     const formData = {
//       email,
//       password,
//     };

//     dispatch(loginUser(formData));
//   }

  return (
    <div className={style.container}>
      <SignInForm/>
      <StatisticInfo/>
    </div>
  )
}

export default SignInPage
