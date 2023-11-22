import React, { useState, useEffect, useRef } from 'react';
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
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = useRef(10);

  const filters = useSelector(state => state.exercises.filters);
  let selectedExercisesData = useSelector(state => state.exercises.exercises);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      itemsPerPage.current = 9;
    } else if (screenWidth <= 480) {
      itemsPerPage.current = 10;
    }

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
    return inputString.toLowerCase();
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

  const pagesVisited = pageNumber * itemsPerPage.current;
  const displayExercises = exercises.slice(
    pagesVisited,
    pagesVisited + itemsPerPage.current
  );

  const pageCount = Math.ceil(exercises.length / itemsPerPage.current);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
          <Rings height="100" width="100" color="#e6533c" ariaLabel="rings-loading" />
        </div>
      ) : (
        <div>
          {!selectedExercises ? (
            <div className={styles.phContainer}>
              {displayExercises.map(exercise => (
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
      {pageCount > 1 && ( 
      <div className={style.pagination}>
        <div className={style.pagination_bar}>
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => changePage({ selected: index })}
              className={pageNumber === index ? style.activeButton : style.paginationButton}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    )}
   </div>
   );
 };

 export default ExercisesSubcategoriesList;