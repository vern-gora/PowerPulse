import React, { useState, useEffect } from 'react';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.jsx';
import ExercisesItem from '../ExercisesItem/ExercisesItem.jsx';
import styles from '../ExercisesCategories/ExercisesCategories.module.css';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchleBodyPartExercise,
  fetchleEquipmentExercise,
  fetchleMusculesExercise,
} from 'redux/exercises/operations.js';
import style from './ExercisesSubcategoriesList.module.css';
import { setExerciseTitle } from 'redux/exercises/exercisesSlice.js';
import sprite from '../../images/svg/sprite.svg';

const ExercisesSubcategoriesList = ({ subcategory }) => {
  const dispatch = useDispatch();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExercises, setSelectedExercises] = useState(null);

  const filters = useSelector(state => state.exercises.filters);
  let selectedExercisesData = useSelector(state => state.exercises.exercises);

  useEffect(() => {
    const filteredExercises = filters.filter(
      item => item.filter === subcategory
    );
    if (filteredExercises) {
      setLoading(false);
    }
    if (!filteredExercises) {
      setLoading(true);
    }
    setExercises(filteredExercises);
  }, [subcategory, filters]);

  function transformString(inputString) {
    const transformedString = inputString.toLowerCase();
    return transformedString;
  }

  const handleExerciseSelect = async (subcategory, exercise) => {
    const { name } = exercise;
    const newName = transformString(name);

    if (subcategory === 'Body parts') {
      dispatch(fetchleBodyPartExercise(newName));
    }
    if (subcategory === 'Muscles') {
      dispatch(fetchleMusculesExercise(newName));
    }
    if (subcategory === 'Equipment') {
      dispatch(fetchleEquipmentExercise(newName));
    }

    dispatch(setExerciseTitle(name));
    setSelectedExercises(selectedExercisesData);
  };
  const handleBack = () => {
    setSelectedExercises(null);
    dispatch(setExerciseTitle('Exercise'));
  };
  return (
    <div style={{ position: 'relative' }}>
      {selectedExercises && (
        <button className={style.backBtn} type="button" onClick={handleBack}>
          <svg className={styles['arrow-svg']}>
            <use href={sprite + '#icon-back-arrow'}></use>
          </svg>
          <div className={styles['icon-back-arrow']}>back</div>
        </button>
      )}
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Rings
            height="100"
            width="100"
            color="#e6533c"
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        <div>
          {!selectedExercises ? (
            <div className={styles.phContainer}>
              {exercises.map(exercise => (
                <ExercisesSubcategoriesItem
                  key={exercise._id}
                  data={exercise}
                  onClick={() => handleExerciseSelect(subcategory, exercise)}
                />
              ))}
            </div>
          ) : (
            <ExercisesItem selectedExercises={selectedExercises} />
          )}
        </div>
      )}
    </div>
  );
};

export default ExercisesSubcategoriesList;
