// ExercisesItem.jsx
import React from 'react';
import styles from '../ExercisesItem/ExercissesItem.module.css';

const ExercisesItem = ({ selectedExercises }) => {
  return (
    <div>
      {selectedExercises.map((exercise) => (
        <div key={exercise._id} className={styles['exercises-item']}>
          <h3 className={styles['data-name']}>{exercise.name}</h3>
          <p className={styles['data-name']}>Body Part: <span className={styles['data-value']}>{exercise.bodyPart}</span></p>
          <p className={styles['data-name']}>Burned Calories: <span className={styles['data-value']}>{exercise.burnedCalories}</span></p>
          <p className={styles['data-name']}>Equipment: <span className={styles['data-value']}>{exercise.equipment}</span></p>
          <p className={styles['data-name']}>Name: <span className={styles['data-value']}>{exercise.name}</span></p>
          <p className={styles['data-name']}>Target: <span className={styles['data-value']}>{exercise.target}</span></p>
          <p className={styles['data-name']}>Time: <span className={styles['data-value']}>{exercise.time} seconds</span></p>
        </div>
      ))}
    </div>
  );
};

export default ExercisesItem;