// ExercisesItem.jsx
import React, { useState } from 'react';
import styles from '../ExercisesItem/ExercissesItem.module.css';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { setExercise } from 'redux/exercises/exercisesSlice';
import ExerciseModal from 'components/ExercisesTable/ExercisesTable';

const ExercisesItem = ({ selectedExercises }) => {
  const [showModal, setShowModal] = useState(false);
  const [exData, setExData] = useState(null);
  const dispatch = useDispatch();
  const handleChooseExercise = exercise => {
    // dispatch(setExercise(exercise.id));
    setExData(exercise);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {selectedExercises.map(exercise => (
        <div key={exercise._id} className={styles['exercises-item']}>
          <div className={styles['exercise-top']}>
            <div className={styles['workout-container']}>
              <h3 className={styles['workout-title']}>WORKOUT</h3>
            </div>
            <button
              onClick={() => {
                handleChooseExercise(exercise);
              }}
              className={styles['button-svg-container']}
            >
              <div className={styles['start-button']}>Start</div>
              <svg className={styles['arrow-svg']}>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
          <div className={styles['exercise-middle']}>
            <svg className={styles.cardRunningIcon} width="24" height="24">
              <use href={sprite + '#running_stick_figure_icon'}></use>
            </svg>
            <p className={styles['data-name-middle']}>
              <span className={styles['data-value']}>{exercise.equipment}</span>
            </p>
          </div>
          <div className={styles['exercise-bottom']}>
            <p className={styles['data-name']}>
              Target:{' '}
              <span className={styles['data-value']}>{exercise.target}</span>
            </p>
            <p className={styles['data-name']}>
              Body Part:{' '}
              <span className={styles['data-value']}>{exercise.bodyPart}</span>
            </p>
            <p className={styles['data-name']}>
              Burned Calories:{' '}
              <span className={styles['data-value']}>
                {exercise.burnedCalories}
              </span>
            </p>
          </div>
        </div>
      ))}
      {showModal && (
        <ExerciseModal dataEx={exData} closeFunc={handleCloseModal} />
      )}
    </div>
  );
};

export default ExercisesItem;
