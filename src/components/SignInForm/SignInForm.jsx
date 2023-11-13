import { NavLink } from "react-router-dom";
import style from './SignInForm.module.css'

const SignInForm = () => {
    return (
        <div className={style.loginContainer}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign In</h1>
                <p className={style.titleDescription}>Welcome! Please enter your credentials to login to the platform:</p>
                <form className={style.form}>
                    <label>
                        <input type="email" required placeholder="Email" name="userEmail" className={style.input} />
                    </label>
                    <label>
                        <input type="password" required placeholder="Password" name="userPassword" minLength={7} className={style.input} />
                    </label>
                </form>
            </div>
            <button className={style.btn}>Sign In</button>
            <p className={style.description}>Don’t have an account?&nbsp;
                <NavLink to={'/signup'} className={style.link}>Sign Up</NavLink>
            </p>
        </div>
    )
}

export default SignInForm;