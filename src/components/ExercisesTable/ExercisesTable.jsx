import React from 'react';
import style from './ExerciseModal.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Timer from './Watcher';

// axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

function ExerciseModal() {
  const [data, setData] = useState(null);
  //   const [videos, setVideos] = useState(null);

  //   const setAuthHeader = token => {
  //     axios.defaults.headers.common.Authorization = `Bearer${token}`;
  //   };
  //   const token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRjZDllYjQ3M2UwNzgwMDcyZWM1M2YiLCJpYXQiOjE2OTk5NzY3ODMsImV4cCI6MTcwMDAwMTk4M30.a_SK3NEZRmx1MhiJzFVjHLeNWyBSK1z3hPlM1L6F53I';
  //   const exerciseId = '64f2458d6f67bc34bae4f8bd';

  //   useEffect(() => {
  //     async function getExersise() {
  //       try {
  //         const exercise = await axios.get(`/exercises/current/${exerciseId}`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setData(exercise.data.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }

  //     getExersise();
  //   }, []);

  const handleButton = () => {
    setData({
      _id: {
        $oid: '64f2458d6f67bc34bae4f906',
      },
      bodyPart: 'upper arms',
      equipment: 'dumbbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0322.gif',
      name: 'dumbbell incline inner biceps curl',
      target: 'biceps',
      burnedCalories: 317,
      time: 3,
    });
    console.log(data);
  };
  return (
    <div className={style.background}>
      <div className={style.modalWindow}>
        <h1>Modal</h1>
        <button onClick={handleButton}> click!!!</button>
        {data && (
          <div className={style.exerciseCard}>
            <img src={data.gifUrl} alt={data.name} />
            <div className={style.info}>
              <p>name: {data.name}</p>
              <p>Body Part: {data.bodyPart}</p>
              <p>Equipment: {data.equipment}</p>
              <p>Target: {data.target}</p>
            </div>
          </div>
        )}
        <div className={style.watcher}>{data && <Timer data={data} />}</div>
      </div>
    </div>
  );
}
export default ExerciseModal;
