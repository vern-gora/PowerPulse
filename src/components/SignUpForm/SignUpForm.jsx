import { NavLink } from "react-router-dom";
import style from './signUpForm.module.css';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2)
          .max(50)
          .required('Required'),
        email: Yup.string()
          .min(2)
          .max(50)
          .email('Error email')
          .required('Required'),
        password: Yup.string()
          .min(2, 'Short password')
          .max(50,'Long password')
          .required('Required'),
      });
      

    return(
        <div className={style.wrapper}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign Up</h1>
                <p className={style.titleDescription}>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={values => {
                        dispatch(register(values));
                      }}
                >
                    {({ errors, touched }) => (
                        <Form className={style.form}>
                            <label className={style.label}>
                                <Field
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    required
                                    className={`
                                    ${style.input} ${errors.name && touched.name ? style.error : ''} 
                                    ${touched.name && !errors.name ? style.success : ''}`}
                                />
                            </label>
                            <label className={style.label}>
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    required
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
                            <label className={style.label}>
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Password'
                                    minLength={7}
                                    required
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
                            <button type='submit' className={style.btn}>Sign Up</button>
                        </Form>
                    )}
                </Formik>
                <p className={style.description}>Already have an account?&nbsp;
                    <NavLink to={'/signin'} className={style.link}>Sign In</NavLink>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm;