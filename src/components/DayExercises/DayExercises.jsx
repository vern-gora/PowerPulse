import React from "react";
import PropTypes from "prop-types";
import styles from "./DayExercises.module.css";
import symbolDefs from "../../images/svg/symbol-exer.svg";

import { Link } from "react-router-dom";

const DayExercises = ({ doneExercises, date }) => {
  const handleDelete = (id) => {

  };

  const addExercisesBtn = () => {
    return (
      <Link to="/exercises" className={styles.linkExercises}>
        <p className={styles.btnAddExercises}>
          Add exercise
          <svg className={styles.arrowIcon}>
            <use href={symbolDefs + "#arrow-icon"}></use>
          </svg>
        </p>
      </Link>
    );
  };

  const listOfExercises = doneExercises.map((obj) => {
    const num = obj._id;
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>
          <div>{obj.exercise.bodyPart}</div>
        </td>
        <td className={styles.tdEquipment}>
          <div>{obj.exercise.equipment}</div>
        </td>
        <td className={styles.tdName}>
          <div>{obj.exercise.name}</div>
        </td>
        <td className={styles.tdTarget}>
          <div>{obj.exercise.target}</div>
        </td>
        <td className={styles.tdBurnedCalories}>
          <div>{obj.burnedCalories}</div>
        </td>
        <td className={styles.tdTime}>
          <div>{obj.time}</div>
        </td>

        <td className={styles.tdDelete}>
          <button onClick={() => handleDelete(obj._id)}>
            <svg className={styles.trashIcon} width="20" height="20">
              <use href={symbolDefs + "#trash_icon"}></use>
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
      exercise: PropTypes.shape({
        bodyPart: PropTypes.string,
        equipment: PropTypes.string,
        name: PropTypes.string,
        target: PropTypes.string,
        burnedCalories: PropTypes.number,
      }),
      _id: PropTypes.string,
      burnedCalories: PropTypes.number,
      time: PropTypes.string,
    })
  ),
  date: PropTypes.any,
};
