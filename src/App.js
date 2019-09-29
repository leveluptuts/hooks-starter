import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle></Toggle>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName);
      }}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log('email sent to ' + value + '!');
  setValue('');
}

export default App;
