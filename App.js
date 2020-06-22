/**
 * Challenge:
 *
 * When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section
 *
 * After the game ends, make it so the user can click the Start button again
 * to play a second time
 */

import React, { useState, useEffect } from 'react';
import './src/styles/style.scss';

function App() {

  const STARTING_TIME = 5;
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(' ');
    // console.log(wordArr.length);
    return wordArr.filter(word => word !== '').length;
  }

  function startGame() {
    setTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
  }

  function endGame() {
    setTimeRunning(false);
    const numWords = calculateWordCount(text);
    setWordCount(numWords);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  // console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} disabled={!isTimeRunning}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
  <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
