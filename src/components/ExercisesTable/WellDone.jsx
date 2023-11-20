import React from 'react';
import style from './ExerciseModal.module.css';
import sprite from '../../images/svg/sprite.svg';
import thumbUp from '../../images/thumb_up@2x.png';
import { Link } from 'react-router-dom';

const WellDone = ({ finishFunc, handleClose, time, calories }) => {
  return (
    <div className={style.welDoneWindow}>
      <button
        className={style.close}
        onClick={() => {
          handleClose();
        }}
      >
        <svg className={style.closeIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </button>
      <img src={thumbUp} alt="Well done!" width={120} height={74} />
      <h5 className={style.title}>Well Done!</h5>
      <div className={style.textBox}>
        <p className={style.doneTip}>
          Your time:
          <span className={style.doneScore}>{time} minutes</span>
        </p>
        <p className={style.doneTip}>
          Burned calories:
          <span className={style.doneScore}>{calories}</span>
        </p>
        <button className={style.btnDone}>Next exercise</button>
        <Link to="/diary" className={style.link}>
          To the diary{' '}
          <svg width="16" height="16">
            <use
              href={sprite + '#arrow_add_icon'}
              className={style.linkArrow}
            ></use>
          </svg>{' '}
        </Link>
      </div>
    </div>
  );
};

export default WellDone;
