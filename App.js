/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 *
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

import React, { useState } from 'react';
import './src/styles/style.scss';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining: ???</h4>
      <button>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
