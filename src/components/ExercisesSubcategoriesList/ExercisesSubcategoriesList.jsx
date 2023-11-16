import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from "../ExercisesCategories/ExercisesCategories.module.css";
import { Rings } from 'react-loader-spinner';

const ExercisesSubcategoriesList = ({ subcategory, onSelectExercise }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://powerpulse-backend.onrender.com/exercises/${subcategory}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAxNjgzMjcsImV4cCI6MTcwMDc3MzEyN30.Y-VGEoGvx9Q12pSA8hS32tJvoRtOKGOiqQbfwfCm_YI`,
          },
        });
        setExercises(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subcategory]);

  const handleExerciseSelect = (exercise) => {
    onSelectExercise(exercise);
  };

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Rings height="100" width="100" color="#e6533c" ariaLabel="rings-loading" />
        </div>
      ) : (
        <div className={styles.phContainer}>
          {exercises.map((exercise) => (
            <CategoryItem key={exercise._id} data={exercise} onClick={() => handleExerciseSelect(exercise)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisesSubcategoriesList;
