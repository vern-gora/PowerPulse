import React, { useState, useEffect, useCallback } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './ExerciseModal.module.css';
import sprite from '../../images/svg/sprite.svg';
import WellDone from './WellDone';
import { useDispatch } from 'react-redux';
import { addExerciseToDiary } from 'redux/diary/operations';

function ExerciseModal({ dataEx, closeFunc }) {
  const dispatch = useDispatch();
  const [data /* setData*/] = useState(dataEx);
  const fullTime = data.time * 60;
  const cofPerS = data.burnedCalories / fullTime;
  const [finished, setFinished] = useState(false);
  const [burned, setBurned] = useState(0);
  const [time, setTime] = useState(fullTime);
  const [play, setPlay] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [countingForward, setCountingForward] = useState(false);
  const [intervalId /*setIntervalId*/] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          setPercentage((newTime / fullTime) * 100);
          const bc = cofPerS * (fullTime - newTime);
          setBurned(Math.floor(bc));
          if (newTime === 0) {
            setIsRunning(false);
            setCountingForward(true);
            setTime(0);
          }
          return newTime;
        });
      }, 1000);
    }
    if (countingForward) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          setPercentage((newTime / fullTime) * 100);
          const bc = cofPerS * (fullTime + newTime);
          setBurned(Math.floor(bc));
          return newTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, countingForward, fullTime, cofPerS]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
    clearInterval(intervalId);
    setPlay(false);
  }, [setIsRunning, intervalId]);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    setCountingForward(false);
    setPlay(true);
    clearInterval(intervalId);
  }, [setIsRunning, setCountingForward, intervalId]);

  const getColor = () => {
    if (countingForward) {
      return 'rgb(32, 178, 170)';
    } else {
      return 'rgb(230, 83, 61)';
    }
  };

  const handleButton = () => {
    dispatch(
      addExerciseToDiary({
        exerciseId: data._id,
        time: Math.round(burned / cofPerS),
        calories: burned,
      })
    );
    console.log({
      exerciseId: data._id,
      time: Math.round(burned / cofPerS),
      calories: burned,
    });
    setFinished(true);
  };

  const handleClose = () => {
    setFinished(false);
  };

  return (
    <div className={style.background}>
      {!finished && (
        <div className={style.modalWindow}>
          <button onClick={closeFunc} className={style.close}>
            <svg className={style.closeIcon}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
          {data && (
            <div className={style.exerciseCard}>
              <div className={style.timerBox}>
                <img className={style.gif} src={data.gifUrl} alt={data.name} />
                <div className={style.watcher}>
                  {data && (
                    <div className={style.timer}>
                      <p className={style.time}>Time</p>
                      <div
                        style={{
                          width: '100px',
                          height: '100px',
                          margin: 'auto',
                        }}
                      >
                        <CircularProgressbar
                          value={percentage}
                          text={`${String(Math.floor(time / 60)).padStart(
                            2,
                            '0'
                          )}:${String(time % 60).padStart(2, '0')}`}
                          strokeWidth={4}
                          styles={buildStyles({
                            pathColor: getColor(),
                            trailColor: countingForward
                              ? '#8effe87a'
                              : '#efede81a',
                            textColor: '#fff',
                            strokeLinecap: 'round',
                          })}
                          style={{ height: '100px', width: '100px' }}
                        />
                      </div>
                      {play && (
                        <button className={style.btn} onClick={startTimer}>
                          <svg className={style.play}>
                            <use href={sprite + '#play_icon'}></use>
                          </svg>
                        </button>
                      )}
                      {!play && (
                        <button className={style.btn} onClick={stopTimer}>
                          <svg className={style.pause}>
                            <use href={sprite + '#pause_square_icon'}></use>
                          </svg>
                        </button>
                      )}
                      <p className={style.coment}>
                        Burned calories:{' '}
                        <span className={style.calor}>{burned}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className={style.infoBox}>
                <div className={style.info}>
                  <p className={style.infoBlock}>
                    <span className={style.tip}>Name:</span>
                    <span className={style.text}>{data.name}</span>
                  </p>
                  <p className={style.infoBlock}>
                    <span className={style.tip}>Body Part:</span>
                    <span className={style.text}>{data.bodyPart}</span>
                  </p>
                  <p className={style.infoBlock}>
                    <span className={style.tip}>Equipment:</span>
                    <span className={style.text}>{data.equipment}</span>
                  </p>
                  <p className={style.infoBlock}>
                    <span className={style.tip}>Target:</span>
                    <span className={style.text}>{data.target}</span>
                  </p>
                </div>
                <div className={style.btnBox}>
                  <button className={style.addExercise} onClick={handleButton}>
                    Add to diary
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {finished && (
        <WellDone
          handleClose={handleClose}
          finishFunc={closeFunc}
          calories={burned}
          exerciseId={data._id}
          time={Math.round(burned / cofPerS / 60)}
        />
      )}
    </div>
  );
}
export default ExerciseModal;
