import React from 'react';
import styles from '../ExercisesCategories/ExercisesCategories.module.css';

const ExercisesSubcategoriesItem = ({ data, onClick }) => {
  const handleImageClick = () => {
    // Передаємо інформацію про вибрану вправу на обробник
    onClick(data);
  };

  return (
    <div className={styles.imageContainer} onClick={handleImageClick}>
      <img className={styles.img} src={data.imgURL} alt={data.name} />
      <p className={styles.imageText}>{data.name}</p>
      <p className={styles.categoryName}>{data.filter}</p>
    </div>
  );
};

export default ExercisesSubcategoriesItem;
