import { NavLink } from "react-router-dom";
import style from './signUpForm.module.css';



const SignUpForm = () => {

    return(
        <div className={style.wrapper}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign Up</h1>
                <p className={style.titleDescription}>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</p>
                <form  className={style.form}>
                    <label className={style.label}>
                        <input 
                            type="text" 
                            name='userName' 
                            placeholder='Name' 
                            required
                            className={style.input}
                        />
                    </label>
                    <label className={style.label}>
                        <input 
                            type="email" 
                            name='userEmail' 
                            placeholder='Email' 
                            required
                            className={style.input}
                        />
                    </label>
                    <label className={style.label}>
                        <input 
                            type="password" 
                            name='userPassword' 
                            placeholder='Password'
                            minLength={7} 
                            required
                            className={style.input}
                        />
                    </label>
                    <button type='submit' className={style.btn}>Sign Up</button>
                </form>
                <p className={style.description}>Already have an account?&nbsp;
                    <NavLink to={'/signin'} className={style.link}>Sign In</NavLink>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm;