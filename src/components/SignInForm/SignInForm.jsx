import { NavLink } from "react-router-dom";
import style from './SignInForm.module.css'
import sprite from '../../images/svg/sprite.svg';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
          .min(2, 'Too Short Email!')
          .max(50, 'Too Long Email!')
          .email('Error email')
          .required('Required'),
        password: Yup.string()
          .required('Required')
          .min(2)
          .max(50),
      });

    return (
        <div className={style.loginContainer}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign In</h1>
                <p className={style.titleDescription}>Welcome! Please enter your credentials to login to the platform:</p>
                <Formik 
                    initialValues={{
                        email: '',
                        password: '',
                      }}
                      validationSchema={SignInSchema}
                      onSubmit={values => {
                        dispatch(logIn(values));
                      }}
                >
                    {({ errors, touched }) => (
                        <Form className={style.form}>
                            <label>
                                <Field 
                                type="email" 
                                required 
                                placeholder="Email" 
                                name="email" 
                                className={`
                                    ${style.input} ${errors.email && touched.email ? style.error : ''} 
                                    ${touched.email && !errors.email ? style.success : ''}`}
                                />
                                {errors.email && touched.email && (
                                    <div className={style.messageInput}>
                                        <svg className={style.errorSvg}>
                                            <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                                        </svg>
                                        <ErrorMessage component='p' className={style.errorText} name='email'/>
                                    </div>
                                )}
                                {!errors.email && touched.email && (
                                    <div className={style.messageInput}>
                                        <svg className={style.successSvg}>
                                            <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                                        </svg>
                                        <p className={style.successText}>Success email</p>
                                    </div>
                                )}
                            </label>
                            <label>
                                <Field 
                                type={showPassword ? 'text' : 'password'}
                                required 
                                placeholder="Password" 
                                name="password" 
                                minLength={7} 
                                className={`
                                    ${style.input} ${errors.password && touched.password ? style.error : ''} 
                                    ${touched.password && !errors.password ? style.success : ''}`} 
                                />
                                {errors.password && touched.password && (
                                    <div className={style.messageInput}>
                                        <svg className={style.errorSvg}>
                                            <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                                        </svg>
                                        <ErrorMessage component='p' className={style.errorText} name='password'/>
                                    </div>
                                )}
                                {!errors.password && touched.password && (
                                    <div className={style.messageInput}>
                                        <svg className={style.successSvg}>
                                            <use href={sprite + '#icon-checkbox-circle-fill'}></use>
                                        </svg>
                                        <p className={style.successText}>Success password</p>
                                    </div>
                                )}
                                {!showPassword && <svg
                                    className={style.eyeIcon}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <use href={sprite + '#icon-eye'}></use>
                                </svg>}
                                {showPassword && <svg
                                    className={style.eyeIconOff}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <use href={sprite + '#icon-eye-off'}></use>
                                </svg>}
                            </label>
                            <button type="submit" className={style.btn}>Sign In</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <p className={style.description}>Don’t have an account?&nbsp;
                <NavLink to={'/signup'} className={style.link}>Sign Up</NavLink>
            </p>
        </div>
    )
}

export default SignInForm;