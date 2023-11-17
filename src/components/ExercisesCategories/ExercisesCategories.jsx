import React, { useState } from 'react';
import ExerciseSubcategoriesList from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.jsx';
import styles from "../ExercisesCategories/ExercisesCategories.module.css";

const ExercisesCategories = () => {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.btnCategories} ${activeSubcategory === 'bodyParts' ? styles.active : ''}`}
          onClick={() => handleSubcategoryClick('bodyParts')}
        >
          Body Parts
        </button>

        <button
          className={`${styles.btnCategories} ${activeSubcategory === 'muscules' ? styles.active : ''}`}
          onClick={() => handleSubcategoryClick('muscules')}
        >
        Muscles
        </button>

        <button
          className={`${styles.btnCategories} ${activeSubcategory === 'equipments' ? styles.active : ''}`}
          onClick={() => handleSubcategoryClick('equipments')}
        >
          Equipments
        </button>
      </div>

      {activeSubcategory && (
        <ExerciseSubcategoriesList subcategory={activeSubcategory} onSelectExercise={(exercise) => console.log(exercise)} />
      )}
    </div>
  );
};

export default ExercisesCategories;
