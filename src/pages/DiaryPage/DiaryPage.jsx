import { DayProducts } from 'components/DayProdcuts/DayProdcuts';
import DayExercises from 'components/DayExercises/DayExercises';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import { DaySwitch } from 'components/DaySwitch/DaySwitch';
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
  const [exData, setExData] = useState(null);

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
    /*const date = getCurrentDate();*/
    dispatch(fetchFoodAndExercises('19/11/2023'));
    setPrData([...productsData]);
    setExData([...exersizesData]);
  }, [dispatch, productsData, exersizesData]);
console.log(exData);
console.log(exersizesData);
  /*const exampleExData = [
    {
      _id: '6559e876f22ef270700e05e4',
      exercise: {
        bodyPart: 'SUSSYYY',
        equipment: 'barbell',
        name: 'barbell rack pull',
        target: 'glutes',
      },

      date: '19/11/2023',
      time: '30',
      calories: 150,
      owner: '654cd9eb473e0780072ec53f',
      v: 0,
    },
    {
      _id: '6559e88bf22ef270700e05e8',
      exercise: {
        bodyPart: 'upper arms',
        equipment: 'dumbbell',
        name: 'dumbbell incline hammer curl',
        target: 'biceps',
      },
      date: '19/11/2023',
      time: '30',
      calories: 150,
      owner: '654cd9eb473e0780072ec53f',
      v: 0,
    },
  ];*/
  const bodyData = {
    dailyRateCalories,
    dailySportMin,
  }
  const diaryForDasboard = {};
  if (prData) {
    const consumedCalories = prData.reduce((accumulator, currentValue) => {
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


  /*
  [
    {
      _id:"",
      exercise:{
        bodyPart:"",
        equipment:"",
        name:"",
        target:"",
      },
      burnedCalories:"",
      time:"",
    },
    {
      ...
    }
  ]
  */
  return (
    <section className={css.diaryPage}>
      <div className={css.topBar}>
        <h1 className={css.header}>Diary</h1>
        <DaySwitch />
      </div>
      <DayDashboard diary={diaryForDasboard} bodyData={bodyData}/>
      <div className={css.reminder}>
      <p className={css.reminderText}>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
      <DayProducts productsData={[...productsData]} />
      <DayExercises doneExercises={[...exersizesData]} date={getCurrentDate()} />

    </section>
  );
};

export default DiaryPage;
