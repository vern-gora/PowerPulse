// CategoryItem.js

import React from 'react';
import styles from "../ExercisesCategories/ExercisesCategories.module.css";

const CategoryItem = ({ data, onClick }) => {
  return (
    <div className={styles.imageContainer} onClick={onClick}>
      <img className={styles.img} src={data.imgURL} alt={data.name} />
      <p className={styles.imageText}>{data.name}</p>
      <p className={styles.categoryName}>{data.category}</p>
    </div>
  );
};

export default CategoryItem;
