import React, { useState } from "react";
import "./index.css"; // Import main-specific styles

const Main = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="main-container">
      <h2>Counter: {counter}</h2>
      <div className="button-group">
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
