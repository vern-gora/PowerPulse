import { DayProducts } from 'components/DayProdcuts/DayProdcuts';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';
import css from './DiaryPage.module.css';
const DiaryPage = () => {
  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <DaySwitch />
      </div>
      <div className={css.reminder}>
        <p className={css.reminderText}>
            Record all your meals in the calorie diary
            everyday. This will help you be aware of your 
            nutrition and make informed choices.
        </p>
      </div>
      <DayProducts />
    </section>
  );
};
export default DiaryPage;
