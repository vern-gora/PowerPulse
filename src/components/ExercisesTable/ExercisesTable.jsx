import React, { useState, useEffect, useCallback } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './ExerciseModal.module.css';
import axios from 'axios';
import sprite from '../../images/svg/sprite.svg';
// import { useSelector } from 'react-redux';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

function ExerciseModal() {
  const [data, setData] = useState({
    _id: {
      $oid: '64f2458d6f67bc34bae4f8b2',
    },
    bodyPart: 'shoulders',
    equipment: 'cable',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0219.gif',
    name: 'cable shoulder press',
    target: 'delts',
    burnedCalories: 289,
    time: 3,
  });
  const fullTime = data.time * 60;
  const cofPerS = data.burnedCalories / fullTime;

  const [burned, setBurned] = useState(0);
  const [time, setTime] = useState(fullTime);
  const [play, setPlay] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [countingForward, setCountingForward] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

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
  function getCurrentDate() {
    const today = new Date();

    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();

    return `${month}/${day}/${year}`;
  }
  // const setAuthHeader = token => {
  //   axios.defaults.headers.common.Authorization = `Bearer${token}`;
  // };
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRjZDllYjQ3M2UwNzgwMDcyZWM1M2YiLCJpYXQiOjE2OTk5NzY3ODMsImV4cCI6MTcwMDAwMTk4M30.a_SK3NEZRmx1MhiJzFVjHLeNWyBSK1z3hPlM1L6F53I';
  // const exerciseId = '64f2458d6f67bc34bae4f8bd';

  // useEffect(() => {
  //   async function getExersise() {
  //     try {
  //       const exercise = await axios.get(`/exercises/current/${exerciseId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setData(exercise.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getExersise();
  // }, []);
  const handleButton = () => {
    const exersiceLog = {
      exercise: data._id,
      date: getCurrentDate(),
      time: Math.floor(burned / cofPerS),
      calories: burned,
    };
    console.log(exersiceLog);
  };
  return (
    <div className={style.background}>
      <div className={style.modalWindow}>
        <button className={style.close}>
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
                    <div style={{ width: '100px', margin: 'auto' }}>
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
    </div>
  );
}
export default ExerciseModal;
