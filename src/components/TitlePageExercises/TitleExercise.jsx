import React from 'react';
import styles from '../TitlePageExercises/TitleExercise.module.css';
import { useSelector } from 'react-redux';

const ExercisesPage = () => {
  const title = useSelector(state => state.exercises.title);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ExercisesPage;
