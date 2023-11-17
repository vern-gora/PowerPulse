import React from 'react';
import styles from '../ExercisesCategories/ExercisesCategories.module.css';

const ExercisesItem = ({ data }) => {
  return (
    <div className={styles.exerciseItem}>
      <h2 className={styles.exerciseTitle}>{data.name}</h2>
      <p><strong>Equipment:</strong> {data.equipment}</p>
      <p><strong>Burned Calories (per 60 minutes):</strong> {data.burnedCalories}</p>
      <p><strong>Body Part:</strong> {data.bodyPart}</p>
      <p><strong>Target Muscles:</strong> {data.target}</p>
    </div>
  );
};

export default ExercisesItem;