import DayProducts from 'components/DayProdcuts/DayProdcuts';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';
import css from './DiaryPage.module.css';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { fetchFood } from 'redux/diary/operations';
import { useEffect } from 'react';
/*import {
  selectConsumedFood,
  selectCurrentData,
  selectIsLoading,
  selectError,
} from 'redux/diary/selectors';*/

/*{
    "name":"Someone",
    "email":"someemail@email.com",
    "password":"123456789"
}*/
const DiaryPage = () => {
  /*const consumedFood = useSelector(selectConsumedFood);
  const currentData = useSelector(selectCurrentData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);*/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFood('10/11/2023'));
  }, [dispatch]);

  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <DaySwitch />
      </div>
      <div className={css.reminder}>
        <p className={css.reminderText}>
          Record all your meals in the calorie diary everyday. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
      <DayProducts />
    </section>
  );
};
export default DiaryPage;
