import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const textToType =
    "What's happened, happened. Which is an expression of faith in the mechanics of the world.";
  const words = textToType.split(" ");
  // console.log(words)

  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0); // Progress of the user
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // console.log(progress)

  // console.log(time)
  // Timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Handle typing input
  const handleInputChange = (e) => {
    const value = e.target.value;
    const typedWords = value.trim().split(" ");
    // console.log(typedWords[typedWords.length-1])

    // console.log(typedWords)

    if (typedWords[typedWords.length - 1] === words[progress]) {
      setProgress((prev) => prev + 1); // Update car progress
      e.target.value = ""; // Reset input
    }

    
   
    // console.log(words[progress])

    setTypedText(value);
  
    // console.log(typedText)

    if (progress + 1 === words.length) {
      setIsRunning(false);
      alert(`Finished! Time: ${time} seconds`);
    }
  };

  return (
    <div className="App">
      <h1>React Typing Race</h1>
      <div className="race-track">
        <div className="lane">
          <span
            className="car"
            style={{ transform: `translateX(${progress * 20}px)` }}
          >
            🚗 You
          </span>
        </div>
      </div>
      <p className="text">{textToType}</p>
      <input
        type="text"
        placeholder="Start typing..."
        onChange={handleInputChange}
        disabled={!isRunning}
      />
      <div className="info">
        <p>
          Progress: {progress}/{words.length}
        </p>
        <p>Time: {time} sec</p>
      </div>
    </div>
  );
}

export default App;
