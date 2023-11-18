import { DayProducts } from 'components/DayProdcuts/DayProdcuts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';
import css from './DiaryPage.module.css';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectConsumedFood,selectDoneExercise } from 'redux/diary/selectors';
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
  const [data, setData] = useState(null);

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
  useEffect(() => {
    const date = getCurrentDate();
    dispatch(fetchFoodAndExercises(date));
    setData(productsData);
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <DaySwitch />
      </div>
      <DayProducts productsData={productsData} />
      <DayExercises doneExercises={exersizesData}/>
      <div className={css.reminder}>
        <p className={css.reminderText}>
          Record all your meals in the calorie diary everyday. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
    </section>
  );
};
export default DiaryPage;
