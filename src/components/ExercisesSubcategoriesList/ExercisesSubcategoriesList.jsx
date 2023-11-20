//ExercisesSubcategoriesList
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.jsx';
import ExercisesItem from '../ExercisesItem/ExercisesItem.jsx'; // Import ExercisesItem
import styles from '../ExercisesCategories/ExercisesCategories.module.css';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchleBodyPartExercise,
  fetchleExerciseSelect,
} from 'redux/exercises/operations.js';

const ExercisesSubcategoriesList = ({ subcategory, onSelectExercise }) => {
  const dispatch = useDispatch();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExercises, setSelectedExercises] = useState(null);

  const filters = useSelector(state => state.exercises.filters);
  const selectedExercisesData = useSelector(state => state.exercises);
  console.log(
    '🚀 ~ file: ExercisesSubcategoriesList.jsx:19 ~ ExercisesSubcategoriesList ~ selectedExercisesData:',
    selectedExercisesData
  );

  useEffect(() => {
    const filteredExercises = filters.filter(
      item => item.filter === subcategory
    );
    if (filteredExercises) {
      setLoading(false);
    }
    if (!filteredExercises) {
      setLoading(true);
    }
    setExercises(filteredExercises);
  }, [subcategory]);

  function transformString(inputString) {
    // Convert to lowercase and replace spaces with an empty string
    const transformedString = inputString.toLowerCase();

    return transformedString;
  }

  const handleExerciseSelect = async exercise => {
    const { name } = exercise;
    const newName = transformString(name);
    console.log(
      '🚀 ~ file: ExercisesSubcategoriesList.jsx:50 ~ handleExerciseSelect ~ newName:',
      newName
    );
    dispatch(fetchleBodyPartExercise(newName));
    setSelectedExercises(selectedExercisesData);
  };

  // console.log(selectedExercisesData);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Rings
            height="100"
            width="100"
            color="#e6533c"
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        <div>
          {!selectedExercises ? (
            <div className={styles.phContainer}>
              {exercises.map(exercise => (
                <ExercisesSubcategoriesItem
                  key={exercise._id}
                  data={exercise}
                  onClick={() => handleExerciseSelect(exercise)}
                />
              ))}
            </div>
          ) : (
            <ExercisesItem selectedExercises={selectedExercises} />
          )}
        </div>
      )}
    </div>
  );
};

export default ExercisesSubcategoriesList;
