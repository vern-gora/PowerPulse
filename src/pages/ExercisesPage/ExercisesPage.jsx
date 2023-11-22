import React from 'react';
import TitleExercise from '../../components/TitlePageExercises/TitleExercise.jsx'
import ExercisesCategories from 'components/ExercisesCategories/ExercisesCategories.jsx';


const ExercisesPage = () => {
  return (
    <div className='exercise-container'>
      <TitleExercise />
      <ExercisesCategories/>
    </div>
  );
};

export default ExercisesPage;
