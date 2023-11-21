import { useSelector } from 'react-redux';
import { /*selectGoToParams,*/ selectUser } from 'redux/auth/selectors';
import UserForm from 'components/UserForm/UserForm';
import UserCard from 'components/UserCard/UserCard';
import css from './ProfilePage.module.css';
import Daily from 'components/Daily/Daily';
import ExclamationMark from 'components/ExclamationMark/ExclamationMark';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const ProfilePage = () => {
  const user = useSelector(selectUser);
  // const params = useSelector(selectGoToParams);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Profile Settings</h2>
      <div className={css.wrapper_content}>
        <div className={css.wrapper_data}>
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
              value={Math.round(user.bmr) || 0}
            />
          </div>
          <div className={css.wrapper_data}>
            <ExclamationMark />
            <LogoutBtn />
          </div>
        </div>
        <div className={css.wrapper_form}>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
