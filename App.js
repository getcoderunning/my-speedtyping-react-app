/**
 * Challenge:
 *
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

import React, { useState } from 'react';
import './src/styles/style.scss';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(' ');
    // console.log(wordArr.length);
    return wordArr.filter(word => word !== '').length;
  }

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining: ???</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
