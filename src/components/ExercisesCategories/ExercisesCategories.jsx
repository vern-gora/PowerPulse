//ExercisesCategories

import React, { useEffect, useState } from 'react';
import ExerciseSubcategoriesList from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.jsx';
import styles from '../ExercisesCategories/ExercisesCategories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters } from 'redux/exercises/operations.js';

const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const [activeSubcategory, setActiveSubcategory] = useState('Body parts');

  const handleSubcategoryClick = subcategory => {
    setActiveSubcategory(subcategory);
  };

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.btnCategories} ${
            activeSubcategory === 'Body parts' ? styles.active : ''
          }`}
          onClick={() => handleSubcategoryClick('Body parts')}
        >
          Body Parts
        </button>

        <button
          className={`${styles.btnCategories} ${
            activeSubcategory === 'Muscles' ? styles.active : ''
          }`}
          onClick={() => handleSubcategoryClick('Muscles')}
        >
          Muscles
        </button>

        <button
          className={`${styles.btnCategories} ${
            activeSubcategory === 'Equipment' ? styles.active : ''
          }`}
          onClick={() => handleSubcategoryClick('Equipment')}
        >
          Equipments
        </button>
      </div>

      {activeSubcategory && (
        <ExerciseSubcategoriesList
          subcategory={activeSubcategory}
          onSelectExercise={exercise => console.log(exercise)}
        />
      )}
    </div>
  );
};

export default ExercisesCategories;
