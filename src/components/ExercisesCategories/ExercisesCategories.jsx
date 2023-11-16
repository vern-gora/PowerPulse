import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./ExercisesCategories.module.css";

const ExercisesCategories = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [muscules, setMuscules] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(`https://powerpulse-backend.onrender.com${url}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAwNTI1MTQsImV4cCI6MTcwMDY1NzMxNH0.KsLgeySROp4TIfze-bIs-2jc5vMEwBw9wHCXaa5IIJY`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('/exercises/bodyParts', setBodyParts);
    fetchData('/exercises/muscules', setMuscules);
    fetchData('/exercises/equipments', setEquipments);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    
    <div className={styles.bg}>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.btnCategories} ${activeCategory === 'bodyPart' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('bodyPart')}
        >
          Body Parts
        </button>
        <button
          className={`${styles.btnCategories} ${activeCategory === 'muscules' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('muscules')}
        >
          Muscles
        </button>
        <button
          className={`${styles.btnCategories} ${activeCategory === 'equipments' ? styles.active : ''}`}
          onClick={() => handleCategoryClick('equipments')}
        >
          Equipments
        </button>
        {activeCategory && <div className={styles.underline}></div>}
      </div>

      {activeCategory && (
        <div className={styles.phContainer}>
          {activeCategory === 'bodyPart' && bodyParts.map((part) => (
            <div key={part._id} onClick={() => handleCategoryClick(part)} className={styles.imageContainer}>
              <img className={styles.img} src={part.imgURL} alt={part.name} />
              <p className={styles.imageText}>{part.name}</p>
              <p className={styles.categoryName}>Body parts</p>
            </div>
          ))}

          {activeCategory === 'muscules' && muscules.map((muscule) => (
            <div key={muscule._id} onClick={() => handleCategoryClick(muscule)} className={styles.imageContainer}>
              <img className={styles.img} src={muscule.imgURL} alt={muscule.name} />
              <p className={styles.imageText}>{muscule.name}</p>
              <p className={styles.categoryName}>Muscles</p>
            </div>
          ))}

          {activeCategory === 'equipments' && equipments.map((equipment) => (
            <div key={equipment._id} onClick={() => handleCategoryClick(equipment)} className={styles.imageContainer}>
              <img className={styles.img} src={equipment.imgURL} alt={equipment.name} />
              <p className={styles.imageText}>{equipment.name}</p>
              <p className={styles.categoryName}>Equipments</p>
            </div>
          ))}
        </div>
      )}

      {activeCategory && (
        <div>
          <h2>{activeCategory.name}</h2>
        </div>
      )}
    </div>
  );
};

export default ExercisesCategories;
