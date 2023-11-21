import React from 'react';
import PropTypes from 'prop-types';
import styles from './DayExercises.module.css';
import symbolDefs from '../../images/svg/symbol-exer.svg';
import { deleteExercise } from 'redux/diary/operations';
import { updateExerciseList } from 'redux/diary/diarySlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteExercise } from 'redux/diary/operations';
import { useDispatch } from 'react-redux';

const DayExercises = ({ doneExercises }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteExercise(id));
    dispatch(updateExerciseList(id));
  };

  const addExercisesBtn = () => {
    return (
      <Link to="/exercises" className={styles.linkExercises}>
        <p className={styles.btnAddExercises}>
          Add exercise
          <svg className={styles.arrowIcon}>
            <use href={symbolDefs + '#arrow-icon'}></use>
          </svg>
        </p>
      </Link>
    );
  };

  const listOfExercises = doneExercises.map((obj, index) => {
    const num = obj._id;
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>
          <div>{obj.bodyPart}</div>
        </td>
        <td className={styles.tdEquipment}>
          <div>{obj.equipment}</div>
        </td>
        <td className={styles.tdName}>
          <div>{obj.name}</div>
        </td>
        <td className={styles.tdTarget}>
          <div>{obj.target}</div>
        </td>
        <td className={styles.tdBurnedCalories}>
          <div>{obj.calories}</div>
        </td>
        <td className={styles.tdTime}>
          <div>{obj.time}</div>
        </td>

        <td className={styles.tdDelete}>
          <button onClick={() => handleDelete(obj._id)}>
            <svg className={styles.trashIcon} width="20" height="20">
              <use href={symbolDefs + '#trash_icon'}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {listOfExercises.length > 0 ? (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesHead}>
            <h2>Exercises</h2>
            {addExercisesBtn()}
          </div>
          <div className={styles.DayExercisesTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thBodyPart}>Body Part</th>
                  <th className={styles.thEquipment}>Equipment</th>
                  <th className={styles.thName}>Name</th>
                  <th className={styles.thTarget}>Target</th>
                  <th className={styles.thBurnedCalories}>Burned Calories</th>
                  <th className={styles.thTime}>Time</th>
                  <th className={styles.thDelete}></th>
                </tr>
              </thead>
              <tbody>{listOfExercises}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesHead}>
            <h2>Exercises</h2>
            {addExercisesBtn()}
          </div>
          <div className={styles.DayExercisesTable}>
            <p className={styles.not_found}>Not found exercises</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DayExercises;

DayExercises.propTypes = {
  doneExercises: PropTypes.arrayOf(
    PropTypes.shape({
      exercise: PropTypes.string,
      bodyPart: PropTypes.string,
      equipment: PropTypes.string,
      name: PropTypes.string,
      target: PropTypes.string,
      burnedCalories: PropTypes.number,
      _id: PropTypes.string,
      time: PropTypes.number,
    })
  ),
  date: PropTypes.any,
};
