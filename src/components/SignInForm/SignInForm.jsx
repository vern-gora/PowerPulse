import { NavLink } from "react-router-dom";
import style from './SignInForm.module.css'
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

const SignInForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();

        const email = event.currentTarget.elements.userEmail.value;
        const password = event.currentTarget.elements.userPassword.value;

        const formData = {
            email,
            password,
        };

        dispatch(logIn(formData));
    }

    return (
        <div className={style.loginContainer}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign In</h1>
                <p className={style.titleDescription}>Welcome! Please enter your credentials to login to the platform:</p>
                <form onSubmit={handleSubmit} className={style.form}>
                    <label>
                        <input type="email" required placeholder="Email" name="userEmail" className={style.input} />
                    </label>
                    <label>
                        <input type="password" required placeholder="Password" name="userPassword" minLength={7} className={style.input} />
                    </label>
                    <button className={style.btn}>Sign In</button>
                </form>
            </div>
            <p className={style.description}>Don’t have an account?&nbsp;
                <NavLink to={'/signup'} className={style.link}>Sign Up</NavLink>
            </p>
        </div>
    )
}

export default SignInForm;