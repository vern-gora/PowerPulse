import { DayProducts } from 'components/DayProdcuts/DayProdcuts';
import DayExercises from 'components/DayExercises/DayExercises';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import svg from '../../images/svg/sprite.svg';
import StyledDatepicker from 'components/Calendar/StyledDatepicker';
import css from './DiaryPage.module.css';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectConsumedFood,
  selectDoneExercise,
  selectDailyCalorieIntake,
  selectDailyPhysicalActivity,
} from 'redux/diary/selectors';
import { fetchFoodAndExercises } from 'redux/diary/operations';
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
  const [prData, setPrData] = useState([]);
  const [exData, setExData] = useState([]);

  const dispatch = useDispatch();

  function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const productsData = useSelector(selectConsumedFood);
  const exersizesData = useSelector(selectDoneExercise);
  const dailyRateCalories = useSelector(selectDailyCalorieIntake);
  const dailySportMin = useSelector(selectDailyPhysicalActivity);
  useEffect(() => {
    const date = getCurrentDate();
    dispatch(fetchFoodAndExercises(date));
    setPrData([...productsData]);
    setExData([...exersizesData]);

  }, [dispatch]);
  const bodyData = {
    dailyRateCalories,
    dailySportMin,
  }
  const diaryForDasboard = {};
  if ([...productsData]) {
    const consumedCalories = [...productsData].reduce((accumulator, currentValue) => {
      return accumulator + currentValue['calories'];
    }, 0);
    diaryForDasboard.consumedCalories = consumedCalories;
  }

  if ([...exersizesData]) {
    const burnedCalories = [...exersizesData].reduce((accumulator, currentValue) => {
      return accumulator + currentValue['calories'];
    }, 0);
    diaryForDasboard.burnedCalories = burnedCalories;
  }
  if ([...exersizesData]) {
    const timeSport = [...exersizesData].reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue['time']);
    }, 0);
    diaryForDasboard.timeSport = timeSport;
  }
  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <StyledDatepicker />
      </div>
      <div className={css.bottomBar}>
      <div className={css.bottomRightBar}>
      <DayDashboard diary={diaryForDasboard} bodyData={bodyData}/>
      <div className={css.reminder}>
        <svg className={css.reminderIcon} width='50px' height='24px'>
          <use href={svg  + "#exclamation_mark_icon"}></use>
        </svg>
      <p className={css.reminderText}>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
      </div>
      <div className={css.diaryLists}>
      <DayProducts productsData={[...productsData]} />
      <DayExercises doneExercises={[...exersizesData]} date={getCurrentDate()} />
      </div>
      </div>

    </section>
  );
};

export default DiaryPage;
