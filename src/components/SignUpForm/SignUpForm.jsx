import { NavLink } from "react-router-dom";
import style from './signUpForm.module.css';



const SignUpForm = () => {

    return(
        <div className={style.wrapper}>
            <div className={style.formContainer}>
                <h1 className={style.title}>Sign Up</h1>
                <p className={style.titleDescription}>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</p>
                <form className={style.form}>
                    <label className={style.label}>
                        <input type="text" required placeholder="Name" name="userName" className={style.input} />
                        {/* <TextField
                        margin="normal"
                        required
                        type="email"
                        label="Email"
                        name="userEmail"
                        placeholder="Enter your email..."
                        /> */   
                        }
                    </label>
                    <label className={style.label}>
                        <input type="email" required placeholder="Email" name="userEmail" className={style.input} />
                        {/* <TextField
                        margin="normal"
                        required
                        type="email"
                        label="Email"
                        name="userEmail"
                        placeholder="Enter your email..."
                        /> */
                        }
                    </label>
                    <label className={style.label}>
                        <input type="password" required placeholder="Password" name="userPassword" minLength={7} className={style.input} />
                        {/* <TextField
                        margin="normal"
                        required
                        type="password"
                        label="Password"
                        name="userPassword"
                        placeholder="Enter your password..."
                        minLength={7}
                        /> */
                        }
                    </label>
                </form>
                <button className={style.btn}>Sign Up</button>
                <p className={style.description}>Already have an account?&nbsp;
                    <NavLink to={'/signin'} className={style.link}>Sign In</NavLink>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm;