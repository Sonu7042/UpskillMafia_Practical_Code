import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Stopwatch running state

  // Effect to handle the timer
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    }
    return () => clearInterval(timer); // Cleanup on unmount or when isRunning changes
  }, [isRunning]);

  // Start stopwatch
  const handleStart = () => setIsRunning(true);

  // Stop stopwatch
  const handleStop = () => setIsRunning(false);

  // Reset stopwatch
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  console.log("time", time)

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    console.log( typeof minutes)
    const seconds = String(time % 60).padStart(2, "0");
    console.log(seconds)
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStart} style={buttonStyle}>
          Start
        </button>
        <button onClick={handleStop} style={buttonStyle}>
          Stop
        </button>
        <button onClick={handleReset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Basic button styling
const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Stopwatch;
