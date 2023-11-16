// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
import UserForm from 'components/UserForm/UserForm';
import UserCard from 'components/UserCard/UserCard';
import css from './ProfilePage.module.css';
import Daily from 'components/Daily/Daily';
import ExclamationMark from 'components/ExclamationMark/ExclamationMark';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const ProfilePage = () => {
  // const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Profile Settings</h2>
      <div className={css.wrapper_content}>
        <div>
          <UserCard />
          <div className={css.wrapper}>
            <Daily
              color="var(--orange-main-color)"
              iconId="fluent_food_icon"
              text="Daily calorie intake"
              value="110 min"
            />
            <Daily
              color="var(--orange-main-color)"
              iconId="dumbbell_icon"
              text="Daily norm of sports"
              value="110 cal"
            />
          </div>
          <ExclamationMark />
          <LogoutBtn />
        </div>
        <div className={css.wrapper_form}>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
