import { NavLink } from "react-router-dom";
import style from './SignInForm.module.css'
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
    const dispatch = useDispatch();

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
          .min(2, 'Too Short Email!')
          .max(50, 'Too Long Email!')
          .email('Invalid email !!!')
          .required('Required'),
        password: Yup.string().required('Required'),
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
                                <Field type="email" required placeholder="Email" name="email" className={style.input} />
                                {errors.email && touched.email ? (<div className={style.message}>{errors.email}</div>) : null}
                            </label>
                            <label>
                                <Field type="password" required placeholder="Password" name="password" minLength={7} className={style.input} />
                                {errors.password && touched.password ? (<div className={style.message}>{errors.password}</div>) : null}
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