import React from 'react';
import style from './SignInPage.module.css';
import bimg from '../../images/desktop_images/hero-desktop.jpg';
import { NavLink } from 'react-router-dom';
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
      <div className={style.loginContainer}>
        <div className={style.formContainer}>
          <h1 className={style.title}>Sign In</h1>
          <p className={style.titleDescription}>Welcome! Please enter your credentials to login to the platform:</p>
          <form className={style.form}>
            <label>
              <input type="email" required placeholder="Email" name="userEmail" className={style.input} />
              {/* <TextField
                margin="normal"
                required
                type="email"
                label="Email"
                name="userEmail"
                placeholder="Enter your email..."
              /> */}
            </label>
            <label>
              <input type="password" required placeholder="Password" name="userPassword" minLength={7} className={style.input} />
              {/* <TextField
                margin="normal"
                required
                type="password"
                label="Password"
                name="userPassword"
                placeholder="Enter your password..."
                minLength={7}
              /> */}
            </label>
          </form>
        </div>
        <button className={style.btn}>Sign In</button>
        <p className={style.description}>Don’t have an account?&nbsp;
          <NavLink to={'/signup'} className={style.link}>Sign Up</NavLink>
        </p>
          {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button> */}
      </div>
      <img src={bimg} alt="Logo" className={style.img}/>;
    </div>
  )
}

export default SignInPage