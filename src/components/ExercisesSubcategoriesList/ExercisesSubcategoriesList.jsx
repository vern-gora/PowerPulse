import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.jsx';
import styles from '../ExercisesCategories/ExercisesCategories.module.css';
import { Rings } from 'react-loader-spinner';

const ExercisesSubcategoriesList = ({ subcategory, onSelectExercise }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://powerpulse-backend.onrender.com/exercises/${subcategory.toLowerCase()}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAyNTM0NjUsImV4cCI6MTcwMDg1ODI2NX0.b1lP8YMZkgLKjx9xr6wW36fv_RLtpakwePByRg0Myb8',
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

  const handleExerciseSelect = async (exercise) => {
    const { name } = exercise;
    try {
      const response = await axios.get(`https://powerpulse-backend.onrender.com/exercises/${subcategory.toLowerCase()}/${name.toLowerCase()}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAyNTM0NjUsImV4cCI6MTcwMDg1ODI2NX0.b1lP8YMZkgLKjx9xr6wW36fv_RLtpakwePByRg0Myb8',
        },
      });
      console.log('Filtered Exercises:', response.data);
    } catch (error) {
      console.error('Error fetching filtered exercises:', error);
    }
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
            <ExercisesSubcategoriesItem key={exercise._id} data={exercise} onClick={() => handleExerciseSelect(exercise)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisesSubcategoriesList;