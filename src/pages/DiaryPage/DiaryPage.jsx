import { DayProducts } from 'components/DayProdcuts/DayProdcuts';
import  DayExercises  from 'components/DayExercises/DayExercises';
import  DayDashboard  from 'components/DayDashboard/DayDashboard';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';
import css from './DiaryPage.module.css';
import { useDispatch /*useSelector*/ } from 'react-redux';
// import { fetchFood } from 'redux/diary/operations';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
/*import {
  selectConsumedFood,
  selectCurrentData,
  selectIsLoading,
  selectError,
} from 'redux/diary/selectors';*/

/*{
  "email": "jhon@wick.com",
  "password": "JhonWick"
}*/
const DiaryPage = () => {
  /*const consumedFood = useSelector(selectConsumedFood);
  const currentData = useSelector(selectCurrentData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);*/
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchFoodAndExercises("10/11/2023"));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  const diaryData = {
    burnedCalories: 500,
    consumedCalories: 1200,
    timeSport: 30,
  };

  const bodyData = {
    dailyRateCalories: 2000,
    dailySportMin: 60,
  };

  const doneExercisesData = [
     
  ];

  const currentDate = new Date(); 
  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <DaySwitch />
      </div>
      <DayProducts />
      <div className={css.reminder}>
        <p className={css.reminderText}>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
      <DayExercises doneExercises={doneExercisesData} date={currentDate} />
      <DayDashboard diary={diaryData} bodyData={bodyData} />
    </section>
  );
};

export default DiaryPage;

