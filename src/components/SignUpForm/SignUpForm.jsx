import { NavLink } from "react-router-dom";
import style from './signUpForm.module.css';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';




const SignUpForm = () => {
    const dispatch = useDispatch();
    
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short Name!')
          .max(50, 'Too Long Name!')
          .required('Required'),
        email: Yup.string()
          .min(2, 'Too Short Email!')
          .max(50, 'Too Long Email!')
          .email('Invalid email !!!')
          .required('Required'),
        password: Yup.string().required('Required'),
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
                                    className={style.input}
                                />
                                {errors.name && touched.name ? (<div className={style.message}>{errors.name}</div>) : null}
                            </label>
                            <label className={style.label}>
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    required
                                    className={style.input}
                                />
                                {errors.email && touched.email ? (<div className={style.message}>{errors.email}</div>) : null}
                            </label>
                            <label className={style.label}>
                                <Field
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    minLength={7}
                                    required
                                    className={style.input}
                                />
                                {errors.password && touched.password ? (<div className={style.message}>{errors.password}</div>) : null}
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