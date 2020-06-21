/**
 * Challenge:
 *
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

import React, { useState, useEffect } from 'react';
import './src/styles/style.scss';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setTimeRunning] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(' ');
    // console.log(wordArr.length);
    return wordArr.filter(word => word !== '').length;
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setTimeRunning(true)}>
        Start
      </button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
