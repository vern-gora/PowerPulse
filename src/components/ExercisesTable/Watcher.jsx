import React, { useState, useEffect } from 'react';

const Timer = ({ data }) => {
  const fullTime = data.time * 60;
  const cofPerS = data.burnedCalories / fullTime;
  const [burned, setBurned] = useState(0);
  const [time, setTime] = useState(fullTime);
  const [isRunning, setIsRunning] = useState(false);
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          setPercentage((newTime / fullTime) * 100);
          return newTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setBurned(calculateBurnedCalories());
    };
  }, [isRunning, time, fullTime]);

  const calculateBurnedCalories = () => {
    const bc = cofPerS * (fullTime - time);
    return Math.floor(bc);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setBurned(calculateBurnedCalories());
  };

  const getColor = () => {
    // Змінюємо колір від оранжевого до сірого за допомогою RGB
    const red = 255;
    const green = Math.round((percentage / 100) * 255);
    const blue = 0;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className="timer">
      <p>Time Remaining: {time} seconds</p>
      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(from 0deg ${
            percentage * 3.6
          }deg, ${getColor()} 0%, #ddd 0%)`,
        }}
      ></div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Burned calories: {burned} </p>
    </div>
  );
};

export default Timer;
