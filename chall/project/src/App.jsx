import React, { useState, useRef } from "react";
import "./App.css"; 

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button className="button play" onClick={startTimer}>
            Play
          </button>
        ) : (
          <button className="button stop" onClick={stopTimer}>
            Stop
          </button>
        )}
        <button className="button reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
